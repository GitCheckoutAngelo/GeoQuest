import { useState } from 'react';
import './Chat.scss';

import { Chat, Message } from '@/models/chat';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import { defaultChat, defaultUser, messageCount, incrementMessageCount } from '@/utils/data';
import { User } from '@/models/user';
import ChatIcon from '@mui/icons-material/Chat';
import TelegramIcon from '@mui/icons-material/Telegram';

interface ChatProps {
  data?: Chat;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Chat = ({ data }: ChatProps) => {
  const user = defaultUser;
  const [chat, setChat] = useState<Chat>(defaultChat);

  const toggleLikeOnMessage = (messageId: number) => {
    setChat((prevChat: Chat) => {
      const chatObjCopy = { ...prevChat }; // new clone of chat obj

      const messagesArrCopy = [...chatObjCopy.messages]; // new clone of message arr obj
      chatObjCopy.messages = messagesArrCopy;

      const messageObjCopy = {
        ...chatObjCopy.messages.filter((message) => message._id === messageId)[0],
      }; // new clone of message obj

      const messageLikesArrCopy = [...messageObjCopy.likes]; // new clone of message likes arr

      const isLikedByUser =
        messageLikesArrCopy.filter((liker) => liker._id === user._id).length > 0;
      if (isLikedByUser) {
        // remove like
        messageObjCopy.likes = messageLikesArrCopy.filter((liker) => liker._id !== user._id);
      } else {
        // add like
        messageObjCopy.likes = messageLikesArrCopy;
        messageLikesArrCopy.push({ ...user });
      }

      // replace old message obj with new one
      const messageIndex = messagesArrCopy.map((message) => message._id).indexOf(messageId);
      messagesArrCopy[messageIndex] = messageObjCopy;

      return chatObjCopy;
    });
  };

  const toggleReplyOnMessage = () => {
    // funtionality for replying here
  };

  const replyToMessage = (messageId: number, replyText: string) => {
    setChat((prevChat: Chat) => {
      const chatObjCopy = { ...prevChat }; // new clone of chat obj

      const messagesArrCopy = [...chatObjCopy.messages]; // new clone of message arr obj
      chatObjCopy.messages = messagesArrCopy;

      const messageObjCopy = {
        ...chatObjCopy.messages.filter((message) => message._id === messageId)[0],
      }; // new clone of message obj

      const messageRepliesArrCopy = [...messageObjCopy.replies];

      const newReply: Message = {
        _id: messageCount,
        title: null,
        text: replyText,
        author: defaultUser,
        date: new Date(),
        likes: [],
        replies: [],
      };

      incrementMessageCount();

      messageRepliesArrCopy.push(newReply);

      messageObjCopy.replies = messageRepliesArrCopy;

      // replace old message obj with new one
      const messageIndex = messagesArrCopy.map((message) => message._id).indexOf(messageId);
      messagesArrCopy[messageIndex] = messageObjCopy;

      return chatObjCopy;
    });
  };

  const renderMessages = () => {
    return chat.messages.map((message: Message) => {
      return (
        <Message
          key={message._id}
          user={user}
          message={message}
          toggleLike={() => toggleLikeOnMessage(message._id)}
          toggleReply={() => toggleReplyOnMessage()}
          replyToMessage={replyToMessage}
        />
      );
    });
  };

  return (
    <Box sx={{ height: '100%', p: '8px', overflow: 'hidden' }}>
      <Box style={{ height: '48px', display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" color="text.primary">
          Chat
        </Typography>
      </Box>
      <Box sx={{ overflowY: 'scroll', height: '100%', p: '10px', pb: '48px' }}>
        <Stack useFlexGap={true} spacing={'10px'}>
          {renderMessages()}
        </Stack>
      </Box>
    </Box>
  );
};

export default Chat;

const Message = ({
  user,
  message,
  toggleLike,
  toggleReply,
  replyToMessage,
}: {
  user: User;
  message: Message;
  toggleLike: () => void;
  toggleReply: () => void;
  replyToMessage: (messageId: number, replyText: string) => void;
}) => {
  const [showReplies, setShowReplies] = useState<boolean>(false);
  const [newReply, setNewReply] = useState<string>('');

  const renderReplies = () => {
    return message.replies.map((reply: Message, i: number) => {
      const isNotLastReply = i < message.replies.length - 1;

      const timeSinceReply = () => {
        const diffInSeconds = Math.floor((new Date().getTime() - reply.date.getTime()) / 1000);

        let timeSince = ``;
        const diffInHours = Math.floor(diffInSeconds / 3600);
        console.log(diffInHours);
        if (diffInHours === 0) {
          const diffInMinutes = Math.floor(diffInSeconds / 60);
          if (diffInMinutes === 0) {
            timeSince = `${diffInSeconds}s`;
          } else {
            timeSince = `${diffInMinutes}m`;
          }
        } else {
          timeSince = `${diffInHours}h`;
        }

        return `${timeSince} ago`;
      };

      return (
        <Box key={reply._id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={reply.author.img} sx={{ width: 24, height: 24 }}></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${reply.author.firstName} ${reply.author.lastName}`}
              secondary={
                <Stack>
                  <Box>{reply.text}</Box>
                  <Box
                    style={{
                      display: 'flex',
                      justifyContent: 'end',
                      fontSize: '12px',
                    }}
                  >
                    {timeSinceReply()}
                  </Box>
                </Stack>
              }
            />
          </ListItem>
          {isNotLastReply && <Divider variant="inset" component="li" />}
        </Box>
      );
    });
  };

  const handleLikeOnClick = () => {
    toggleLike();
  };

  const handleReplyOnClick = () => {
    setShowReplies((prevShowReplies) => !prevShowReplies);
    toggleReply();
  };

  const handleReplyInputOnChange = (
    onChangeEvent: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewReply(onChangeEvent.target.value);
  };

  const handleReplyInputOnSubmit = () => {
    if (newReply.length === 0) return;
    replyToMessage(message._id, newReply);
    setNewReply('');
  };

  const date = `${message.date.getDate()} ${message.date.toLocaleString('default', {
    month: 'long',
  })} ${message.date.getFullYear()}`;
  const authorFullName = `${message.author.firstName} ${message.author.lastName}`;

  return (
    <Card
      sx={{
        maxWidth: 380,
        minWidth: 360,
        outline: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
      }}
      raised
    >
      <CardHeader
        avatar={<Avatar src={message.author.img}></Avatar>}
        title={<Typography>{message.title}</Typography>}
        subheader={
          <div
            style={{ display: 'flex', columnGap: '8px', alignItems: 'center', fontSize: '12px' }}
          >
            <span>{date}</span>
            <div className="dot" />
            <span>{authorFullName}</span>
          </div>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent sx={{ outline: '' }}>
        <Typography variant="body2" color="text.secondary">
          {message.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              outline: '',
              width: '50%',
              pl: '15px',
            }}
          >
            <LikeButton currentUser={user} likes={message.likes} onClick={handleLikeOnClick} />
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'end',
              alignItems: 'center',
              outline: '',
              width: '50%',
              columnGap: '2px',
              pr: '25px',
            }}
          >
            <ReplyButton
              currentUser={user}
              replies={message.replies}
              active={showReplies}
              onClick={handleReplyOnClick}
            />
          </Grid>
        </Grid>
      </CardActions>
      {showReplies && (
        <CardContent>
          <Divider />
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {renderReplies()}
          </List>
          <Box
            sx={{
              display: 'flex',
              outline: '0px solid black',
              flexDirection: 'row',
              justifyContent: 'end',
              p: '',
            }}
          >
            <TextField
              sx={{ width: '100%', height: '', fontSize: '14px' }}
              id="outlined-adornment-password"
              type="text"
              multiline
              maxRows={4}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ pr: '5px' }}>
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleReplyInputOnSubmit()}
                      edge="end"
                      size="medium"
                    >
                      <TelegramIcon fontSize="medium" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={handleReplyInputOnChange}
              placeholder={`Reply to ${message.author.firstName} ${message.author.lastName}...`}
              value={newReply}
            />
          </Box>
        </CardContent>
      )}
    </Card>
  );
};

const LikeButton = ({
  currentUser,
  likes,
  onClick,
}: {
  currentUser: User;
  likes: User[];
  onClick: () => void;
}) => {
  const active = likes.filter((user) => user._id === currentUser._id).length > 0;
  const tooltipMessage =
    likes.length > 0
      ? `${likes[0]._id === currentUser._id ? 'You like this' : `${likes[0].firstName} likes this`}`
      : 'Be the first to like this';

  return (
    <>
      <IconButton aria-label="like comment" onClick={onClick} sx={{ color: '#F9DB39' }}>
        {active ? <StarIcon /> : <StarBorderIcon />}
      </IconButton>
      <Tooltip title={tooltipMessage}>
        <Typography sx={{ color: '#7D6E1D', fontSize: '14px' }}>{likes.length}</Typography>
      </Tooltip>
    </>
  );
};

const ReplyButton = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentUser,
  replies,
  active,
  onClick,
}: {
  currentUser: User;
  replies: Message[];
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <>
      <IconButton aria-label="share" onClick={onClick} sx={{ color: '#3278E2' }}>
        {active ? <ChatIcon /> : <ChatBubbleOutlineIcon />}
      </IconButton>
      <Typography
        onClick={onClick}
        sx={{ color: '#3278E2', fontSize: '14px', '&:hover': { cursor: 'pointer' } }}
      >{`${replies.length} replies`}</Typography>
    </>
  );
};

// const Reply = () => {
//   return (
//     <>
//       <IconButton aria-label="share">
//         <ChatBubbleOutlineIcon />
//       </IconButton>
//       <Typography sx={{ pr: "" }}>{`${[].length} replies`}</Typography>
//     </>
//   );
// }
