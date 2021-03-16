// const renderCounters = (property, mainSelector) => {
//     let counter = 0;
//     const filteredMessages = [];
//     for (let i = 0; i < mails.length; i++) {
//         if (mails[i][property]) {
//             filteredMessages.push(mails[i]);
//         }
//     }
//     counter = filteredMessages.length;

//     const counterBox = document.querySelector(mainSelector + ".counter");
//     counterBox.innerHTML = counter;
// }

// const renderFavedCounter = () => {
//     let favedAmount = 0;
//     const favedMessages = [];
//     for (let i = 0; i < mails.length; i++) {
//         if (mails[i].status.isFaved) {
//             favedMessages.push(mails[i]);
//         }
//     }
//     favedAmount = favedMessages.length;

//     const favedAmountBox = document.querySelector(".aside_list_item_starred .counter");
//     favedAmountBox.innerHTML = favedAmount;
// }



// Toma el array de mails y coge los snoozed
// const renderSnoozed =() => {
//     const snoozedMessages = [];
//     let htmlString = "";

//     //paso por todos y me quedo con los mailType: received
//     for (let i = 0; i < mails.length; i++) {
//         if (mails[i].mailType == "snoozed") {
//             snoozedMessages.push(mails[i]);
//         }
//     }

//     for (let i = 0; i < snoozedMessages.length; i++) {
//         htmlString += `
//         <article class="message_item ${snoozedMessages[i].status.isRead ? `read`: ``} ${snoozedMessages[i].status.isActive ? `selected`: ``}" data-id="${snoozedMessages[i].mailId}">
//             <a class="message_item_link" href="#" target="_self">
//                 <div class="image">
//                     <img src="${snoozedMessages[i].from.pic}" alt="${snoozedMessages[i].from.name}'s pic">
//                 </div>
//                 <div class="message_item_text">
//                     <div class="first_row">
//                         <h3 class="user_name">${snoozedMessages[i].from.name}</h3>
                        
//                         <span class="material-icons folder ${snoozedMessages[i].status.hasFolder}">folder</span>
                        
//                         ${snoozedMessages[i].message.attach ? `<span class="material-icons attached">attachment</span>`: '' }
                        
//                         <h6 class="timer">${formatDate(snoozedMessages[i].message.date)}</h6>
//                     </div>
//                     <div class="second_row">
//                         <h4 class="topic">${formatMessageSubject(snoozedMessages[i].message.subject)}</h4>
//                     </div>
//                     <div class="third_row">
//                         <h5 class="content grey">${formatMessageText(snoozedMessages[i].message.text)}</h5>
                    
//                         <span class="material-icons fav_star ${snoozedMessages[i].status.isFaved ? `fav`: `no-fav`}">${snoozedMessages[i].status.isFaved ? `star` : `star_border`} </span>

//                     </div>
                    
//                 </div>
//             </a>
//         </article>
//         `;
//     }

//     const messagesSpace = document.querySelector('.messages');
//     messagesSpace.innerHTML = htmlString;
// };


// const initAsideEvent = () => {
//     const asideItemInbox = document.querySelector('.aside_list_item_inbox');

//     asideItemInbox.forEach(item => {
//         item.addEventListener('click', () => {
//             item.classList.add('active')
//             renderReceived();
//         });
//     })

//     const asideItemSnoozed = document.querySelector('.aside_list_item_snoozed');

//     asideItemSnoozed.forEach(item => {
//         item.addEventListener('click', () => {
//             renderSnoozed();
//         });
//     })
// };







const renderInboxMessagesSocial = () => {
    const socialMessages = [];
    let htmlString = "";

    //paso por todos y me quedo con los mailType: received y primary
    for (let i = 0; i < mails.length; i++) {
        if (mails[i].mailType == "received" && mails[i].message.category == "social") {
            socialMessages.push(mails[i]);
        }
    }

    for (let i = 0; i < socialMessages.length; i++) {
        htmlString += `
        <article class="message_item ${socialMessages[i].status.isRead ? `read`: ``} ${socialMessages[i].status.isActive ? `selected`: ``}" data-id="${socialMessages[i].mailId}">
            <a class="message_item_link" href="#" target="_self">
                <div class="image">
                    <img src="${socialMessages[i].from.pic}" alt="${socialMessages[i].from.name}'s pic">
                </div>
                <div class="message_item_text">
                    <div class="first_row">
                        <h3 class="user_name">${socialMessages[i].from.name}</h3>
                        
                        <span class="material-icons folder ${socialMessages[i].status.hasFolder}">folder</span>
                        
                        ${socialMessages[i].message.attach ? `<span class="material-icons attached">attachment</span>`: '' }
                        
                        <h6 class="timer">${formatDate(socialMessages[i].message.date)}</h6>
                    </div>
                    <div class="second_row">
                        <h4 class="topic">${formatMessageSubject(socialMessages[i].message.subject)}</h4>
                    </div>
                    <div class="third_row">
                        <h5 class="content grey">${formatMessageText(socialMessages[i].message.text)}</h5>
                    
                        <span class="material-icons fav_star ${socialMessages[i].status.isFaved ? `fav`: `no-fav`}" data-id="${socialMessages[i].mailId}">${socialMessages[i].status.isFaved ? `star` : `star_border`} </span>

                    </div>
                    
                </div>
            </a>
        </article>
        `;
    }

    const messagesSpace = document.querySelector('.messages');
    messagesSpace.innerHTML = htmlString;

    initInboxEvent(); 
    initMessagesEvent();
    renderAsideMenuCounter();
    
    
};

const renderInboxMessagesPromotions = () => {
    const promotionsMessages = [];
    let htmlString = "";

    //paso por todos y me quedo con los mailType: received y primary
    for (let i = 0; i < mails.length; i++) {
        if (mails[i].mailType == "received" && mails[i].message.category == "promotions") {
            promotionsMessages.push(mails[i]);
        }
    }

    for (let i = 0; i < promotionsMessages.length; i++) {
        htmlString += `
        <article class="message_item ${promotionsMessages[i].status.isRead ? `read`: ``} ${promotionsMessages[i].status.isActive ? `selected`: ``}" data-id="${promotionsMessages[i].mailId}">
            <a class="message_item_link" href="#" target="_self">
                <div class="image">
                    <img src="${promotionsMessages[i].from.pic}" alt="${promotionsMessages[i].from.name}'s pic">
                </div>
                <div class="message_item_text">
                    <div class="first_row">
                        <h3 class="user_name">${promotionsMessages[i].from.name}</h3>
                        
                        <span class="material-icons folder ${promotionsMessages[i].status.hasFolder}">folder</span>
                        
                        ${promotionsMessages[i].message.attach ? `<span class="material-icons attached">attachment</span>`: '' }
                        
                        <h6 class="timer">${formatDate(promotionsMessages[i].message.date)}</h6>
                    </div>
                    <div class="second_row">
                        <h4 class="topic">${formatMessageSubject(promotionsMessages[i].message.subject)}</h4>
                    </div>
                    <div class="third_row">
                        <h5 class="content grey">${formatMessageText(promotionsMessages[i].message.text)}</h5>
                    
                        <span class="material-icons fav_star ${promotionsMessages[i].status.isFaved ? `fav`: `no-fav`}" data-id="${promotionsMessages[i].mailId}">${promotionsMessages[i].status.isFaved ? `star` : `star_border`} </span>

                    </div>
                    
                </div>
            </a>
        </article>
        `;
    }

    const messagesSpace = document.querySelector('.messages');
    messagesSpace.innerHTML = htmlString;

    initInboxEvent(); 
    initMessagesEvent();
    renderAsideMenuCounter();
    
    
};