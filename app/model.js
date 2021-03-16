
//modelizar mails, aside, composeMail...

const mails = [
	{
        mailId: 0, 
        mailType: "received", // Received / Snoozed / Sent / Draft / Deleted
        from:{
            pic: "assets/img/maria.png",
            name: "María González",
            mail: "maria@gmail.com",
        },
		to: {
            pic: "assets/img/pedro.png",
            name: "Pedro Martínez", 
            mail: "pedro@gmail.com",

        }, 
        message:{
            subject: "This is the subject",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo saepe quae nemo consequatur aliquid numquam quam! Deleniti voluptate provident cupiditate, quam repudiandae sit ad iusto quaerat, atque iure quod quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo saepe quae nemo consequatur aliquid numquam quam! Deleniti voluptate provident cupiditate, quam repudiandae sit ad iusto quaerat, atque iure quod quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo saepe quae nemo consequatur aliquid numquam quam! Deleniti voluptate provident cupiditate, quam repudiandae sit ad iusto quaerat, atque iure quod quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo saepe quae nemo consequatur aliquid numquam quam! Deleniti voluptate provident cupiditate, quam repudiandae sit ad iusto quaerat, atque iure quod quisquam.",
            date: new Date(2021, 01, 10, 14, 00 ),
            attach: true,
            categoriesid: 0,
        },
        status:{
            isRead: false, 
            isActive: true, 
            isHovered: false,
            isFaved: false, 
            hasFolder: "work", // Work / Personal / Discounts
        }
    },
    //...
]

const categories = [
    {
        id: 0,
        icon: "inbox",
        name: "Primary", 
        counter: 0,
    },
    {
        id: 1,
        icon: "social",
        name: "Social", 
        counter: 0,
    },
    {
        id: 2,
        icon: "tag",
        name: "Promotions", 
        counter: 0,
    },
]

const asideMenu = [
    {
        id: 0,
        icon: "inbox",
        label: "Inbox",
        counter: 0,
        status:{
            isActive: true,
            isHovered: false,
        },
        menuLevel: 0,
    },
    //...
]    

const asideFolders = [
    {
        id: 0,
        icon: "folder",
        label: "Work",
        counter: 0,
        color: "$turquesa",
        status:{
            isActive: false,
            isHovered: false,
        },
    },
    //...
]     


const searchbox = {
    searchTerm: "", 
    searchPlaceholder: "Search form messagees...",
    menuOpened: false, 
    menuContent: [
        {
            imputLabel: "From"
        },
        //...
    ]	
};

const composeMail = {
    title: "New message",
    imputTo: "To",
    imputSubject: "Subject",
    imputMail: "",
    //...
};