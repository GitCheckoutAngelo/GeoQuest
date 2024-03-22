import { User } from "@/models/user";
import { Chat } from "@/models/chat";

export const defaultUser: User = {
    _id: 0,
    firstName: 'Joe',
    lastName: 'Mami',
    img: 'https://cdn-icons-png.flaticon.com/512/727/727393.png?w=826&t=st=1684236691~exp=1684237291~hmac=acf4f5020bbd745edcf6bad6b0c0a8c09f10d79f793ab3eb0d853ad7e6949451',
};

export let messageCount: number = 8;
export const incrementMessageCount = () => messageCount++;

export const defaultChat: Chat = { 
    messages:[
        {
            _id: 0,
            title: "Help getting started",
            text: "Hi there, I am new to this game and I have no idea what I am doing. Could I please get some help on how to get started?",
            author: defaultUser,
            date: new Date(),
            likes: [defaultUser],
            replies: [ 
                {
                    _id: 6,
                    title: null,
                    text: "I am you, brother. Therefore, I wouldn't know how to help.",
                    author: defaultUser,
                    date: new Date("2023-05-27T03:24:00"),
                    likes: [],
                    replies: [],
                },
                {
                    _id: 7,
                    title: null,
                    text: "Hi there, I am also you. Therefore, I too cannot provide any help.",
                    author: defaultUser,
                    date: new Date("2023-05-27T10:24:00"),
                    likes: [],
                    replies: [],
                }
            ],
        },
        {
            _id: 1,
            title: "",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            author: defaultUser,
            date: new Date(),
            likes: [],
            replies: [],
        },
        {
            _id: 2,
            title: "Awesome Title",
            text: "Hi there, I am new to this game and I have no idea what I am doing. Could I please get help on getting started?",
            author: defaultUser,
            date: new Date(),
            likes: [],
            replies: [],
        },
        {
            _id: 3,
            title: "Help getting started",
            text: "Hi there, I am new to this game and I have no idea what I am doing. Could I please get some help on how to get started?",
            author: defaultUser,
            date: new Date(),
            likes: [defaultUser],
            replies: [],
        },
        {
            _id: 4,
            title: " Nemo enim ipsam",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            author: defaultUser,
            date: new Date(),
            likes: [],
            replies: [],
        },
        {
            _id: 5,
            title: "Awesome Title",
            text: "Hi there, I am new to this game and I have no idea what I am doing. Could I please get help on getting started?",
            author: defaultUser,
            date: new Date(),
            likes: [],
            replies: [],
        },
    ]
};