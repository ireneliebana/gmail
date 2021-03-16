window.addEventListener('load', () =>{
    
    // ASIDE
    renderAsideMenu();
    renderAsideMenuCounter();
    renderAsideFolders();
    renderAsideFoldersCounter();
    openCloseNewMessage();
    initAsideEvent();
    
    // ASIDE MESSAGES
    renderCategory();
    initCategoryEvent();
    initMessagesEvent(); 
    initMessagesEvent2(); 
    
    renderInboxMessagesPrimary();
    
    // MAIN MESSAGES
    renderEachMessage(0);
     
})

// console.log data 
console.log(mails);
console.log(asideMenu);
console.log(asideFolders);
console.log(inboxCategory);
//-----------------

// ABRE Y CIERRA ASIDE
const showMenu = document.querySelector('.aside_show_menu');
const aside = document.querySelector('.aside_menu');

showMenu.addEventListener('click', () => {
    aside.classList.toggle('show_menu');
});

const showMessage = document.querySelector('.messages');
const mainMessage = document.querySelector('.main');

showMessage.addEventListener('click', () => {
    mainMessage.classList.toggle('selected');
});


// ABRE Y CIERRA NEW MESSAGE
const openCloseNewMessage = () => {
    const newMessage = document.querySelector('.email_new');
    const newMessageButton = document.querySelector('.compose_email_button');
    const newMessageClose = document.querySelector('.close_email_new');
    
    newMessageButton.addEventListener('click', () => {
        newMessage.classList.add('visible');
    });
    newMessageClose.addEventListener('click', () => {
        newMessage.classList.remove('visible');
    });
}


//-----------FUNCIONES DE EDICIÓN-----------

const formatDate = (date) => {
    const dateReal = new Date(date);
    const y = dateReal.getFullYear();
    const m = dateReal.getMonth() + 1;
    const d = dateReal.getDate();

    return `${d}/${m}/${y}`;
}

const formatMessageSubject = (text) => {
    let subjectCapitalize = text[0].toUpperCase()+text.slice(1);
    if (subjectCapitalize.length > 40){
        return subjectCapitalize.slice(0, 40) + '...';
    } else {
        return subjectCapitalize;
    }
}

const formatMessageText = (text) => {return text.slice(0, 47) + '...';}

//-----------------------------------------


//-----------------ASIDE-------------------

// Toma el array de asideMenu y lo pinta
const renderAsideMenu = () => {
    let htmlString = "";

    //paso por todos y los pinto
    for (let i = 0; i < asideMenu.length; i++) {
        htmlString += `
        <li class="aside_list_item aside_list_item_${asideMenu[i].label.toLowerCase()} ${asideMenu[i].status.isActive ? "active" : ""} data-id="${asideMenu[i].id}"">
            <a class="aside_list_item_link" href="#" target="_self">
                <span class="material-icons">${asideMenu[i].icon}</span>                             
                <h4 class="aside_list_item_label">${asideMenu[i].label}</h4>
                <h4 class="counter ${asideMenu[i].label.toLowerCase()}">${asideMenu[i].counter}</h4>
            </a>
        </li>
        `;
    }  

    const asideSpace = document.querySelector('.aside_section_list')
    asideSpace.innerHTML = htmlString;  
};

const renderAsideMenuCounter = () =>{
  
    const counter = {
        inbox: 0, 
        starred: 0, 
        snoozed: 0,
        sent: 0,
        drafts: 0,
        deleted: 0,
    };
    mails.forEach(mail => {
        switch (mail.mailType) {
            case "received": 
                counter.inbox++;
                break;
            case "snoozed": 
                counter.snoozed++;
                break;
            case "sent": 
                counter.sent++;
                break;
            case "draft": 
                counter.drafts++;
                break;
            case "deleted": 
                counter.deleted++;
                break;
        }
       
    });
    mails.forEach(mail => {
        switch (mail.status.isFaved) {
            case true: 
                counter.starred++;
                break;
        }
    })
    
    // inbox
    const inboxCounter = document.querySelector(".counter" + ".inbox"); 
    inboxCounter.innerHTML = counter.inbox;
    // starred
    const starredCounter = document.querySelector(".counter" + ".starred"); 
    starredCounter.innerHTML = counter.starred;
    // snoozed
    const snoozedCounter = document.querySelector(".counter" + ".snoozed"); 
    snoozedCounter.innerHTML = counter.snoozed;
    // sent
    const sentCounter = document.querySelector(".counter" + ".sent"); 
    sentCounter.innerHTML = counter.sent;
    // drafts
    const draftsCounter = document.querySelector(".counter" + ".drafts"); 
    draftsCounter.innerHTML = counter.drafts;
    // deleted
    const deletedCounter = document.querySelector(".counter" + ".deleted"); 
    deletedCounter.innerHTML = counter.deleted;
}

// Toma el array de asideFolders y lo pinta
const renderAsideFolders = () => {
    let htmlString = "";

    //paso por todos y los pinto
    for (let i = 0; i < asideFolders.length; i++) {
        htmlString += `

        <li class="aside_list_item aside_list_item_${asideFolders[i].label.toLowerCase()} ${asideFolders[i].status.isActive ? "active" : ""} data-id="${asideFolders[i].id}"">
            <a class="aside_list_item_link" href="#" target="_self">
                <span class="material-icons folder ${asideFolders[i].label.toLowerCase()}">${asideFolders[i].icon}</span>                             
                <h4 class="aside_list_item_label">${asideFolders[i].label}</h4>
                <h4 class="counter ${asideFolders[i].label.toLowerCase()}">${asideMenu[i].counter}</h4>
            </a>
        </li>
        `;
    }  

    const asideFoldersSpace = document.querySelector('.aside_section_list_folders')
    asideFoldersSpace.innerHTML = htmlString;  
};

const renderAsideFoldersCounter = () =>{
   
    const counter = {
        work: 0, 
        discounts: 0, 
        personal: 0
    };
    mails.forEach(mail => {
        switch (mail.status.hasFolder) {
            case "work": 
                counter.work++;
                break;
            case "discounts": 
                counter.discounts++;
                break;
            case "personal": 
                counter.personal++;
                break;
        }
    });
    // work
    const workCounter = document.querySelector(".counter" + ".work"); 
    workCounter.innerHTML = counter.work;
    // discounts
    const discountsCounter = document.querySelector(".counter" + ".discounts");
    discountsCounter.innerHTML = counter.discounts;
    // personal
    const personalCounter = document.querySelector(".counter" + ".personal");
    personalCounter.innerHTML = counter.personal;
}

const initAsideEvent = () => {
    const asideItems = document.querySelectorAll(".aside_list_item");
    asideItems.forEach((cat,i) => {
        cat.addEventListener('click', () => {
            for (let j = 0; j < asideItems.length; j++){
                asideItems[j].classList.remove('active');
            }

            asideItems[i].classList.add('active');
        })
    });
};


//---------------ASIDE MESSAGES---------------

//category primary/social/promotions
const renderCategory = () => {
    let htmlString = "";

    //paso por todos y los pinto
    for (let i = 0; i < inboxCategory.length; i++) {
        htmlString += `
        <a class="messages_class_link messages_class_link${inboxCategory[i].label.toLowerCase()} ${inboxCategory[i].status.isActive ? "active" : ""}" href="#" target="_self">
            <div class="messages_class_icon">
                <span class="material-icons">${inboxCategory[i].icon}</span>
            </div>
            <div class="messages_class_text">
                <div>
                    <h5 class="messages_class_label">${inboxCategory[i].label}</h5>
                    <div class="tooltip azul">
                        <h6 class="number">${inboxCategory[i].counter}</h6>
                        <h6 class="new">new</h6>
                    </div>
                </div>
                
                <h6 class="messages_class_sublabel">Sublabel</h6>
            </div>
        </a>
        `;
    }  

    const categorySpace = document.querySelector('.messages_class')
    categorySpace.innerHTML = htmlString;  
    
}

const initCategoryEvent = () => {
    const category = document.querySelectorAll(".messages_class_link");
    category.forEach((cat,i) => {
        cat.addEventListener('click', () => {
            if (inboxCategory[i].id == 1){
                renderInboxMessagesPrimary();
            }else if (inboxCategory[i].id == 2){
                renderInboxMessagesSocial();
            }else if (inboxCategory[i].id == 3){
                renderInboxMessagesPromotions();
            }

            for (let j = 0; j < category.length; j++){
                category[j].classList.remove('active');
            }
            category[i].classList.add('active');
        })
    });
};




// Toma el array de mails y coge los received
const renderInboxMessagesPrimary = () => {
    const primaryMessages = [];
    let htmlString = "";

    //paso por todos y me quedo con los mailType: received y primary
    for (let i = 0; i < mails.length; i++) {
        if (mails[i].mailType == "received" && mails[i].message.category == "primary") {
            primaryMessages.push(mails[i]);
        }
    }

    for (let i = 0; i < primaryMessages.length; i++) {
        htmlString += `
        <article class="message_item ${primaryMessages[i].status.isRead ? `read`: ``} ${primaryMessages[i].status.isActive ? `selected`: ``}" data-id="${primaryMessages[i].mailId}">
            <a class="message_item_link" href="#" target="_self">
                <div class="image">
                    <img src="${primaryMessages[i].from.pic}" alt="${primaryMessages[i].from.name}'s pic">
                </div>
                <div class="message_item_text">
                    <div class="first_row">
                        <h3 class="user_name">${primaryMessages[i].from.name}</h3>
                        
                        <span class="material-icons folder ${primaryMessages[i].status.hasFolder}">folder</span>
                        
                        ${primaryMessages[i].message.attach ? `<span class="material-icons attached">attachment</span>`: '' }
                        
                        <h6 class="timer">${formatDate(primaryMessages[i].message.date)}</h6>
                    </div>
                    <div class="second_row">
                        <h4 class="topic">${formatMessageSubject(primaryMessages[i].message.subject)}</h4>
                    </div>
                    <div class="third_row">
                        <h5 class="content grey">${formatMessageText(primaryMessages[i].message.text)}</h5>
                    
                        <span class="material-icons fav_star ${primaryMessages[i].status.isFaved ? `fav`: `no-fav`}" data-id="${primaryMessages[i].mailId}">${primaryMessages[i].status.isFaved ? `star` : `star_border`} </span>

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
    initMessagesEvent2();
    renderAsideMenuCounter(); 
    
};

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
    initMessagesEvent2();
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
    initMessagesEvent2();
    renderAsideMenuCounter();
};

const initInboxEvent = () => {
    const favStar = document.querySelectorAll('.fav_star');
    
    //la estrella clickada cambia de estado
    favStar.forEach(star => {
        star.addEventListener('click', () => {
            const id = star.dataset.id;
            const mail = mails.find(mail => mail.mailId == id);
            mail.status.isFaved = !mail.status.isFaved
        })
    })
   
};

const initMessagesEvent = () => {
    const messages = document.querySelectorAll('.message_item');
    //todos deseleccionados al principio
    for (let j = 0; j < messages.length; j++){
        messages[j].classList.remove('selected');
    }
    //el clickado se selecciona
    messages.forEach((message,i) => {
        message.addEventListener('click', () => {
            const id = message.dataset.id;
            renderEachMessage(id);
            for (let j = 0; j < messages.length; j++){
                messages[j].classList.remove('selected');
                
            }
            messages[i].classList.add('selected'); 
        });
    })
   
};
const initMessagesEvent2 = () => {
    const messages = document.querySelectorAll('.message_item');
    //el clickado se marca como leído
    messages.forEach((message,i) => {
        message.addEventListener('click', () => {
            const id = message.dataset.id;
            const mail = mails.find(mail => mail.mailId == id);
            mail.status.isRead = true;
            console.log(mail)
            
            if (mail.message.category == "primary"){
                renderInboxMessagesPrimary();
            }else if (mail.message.category == "social"){
                renderInboxMessagesSocial();
            }else if (mail.message.category == "promotions"){
                renderInboxMessagesPromotions();
            }
        })
    })
}

//-----------------MAIN MESSAGES------------------

const renderEachMessage = (id) => {
    let htmlString = "";

    //encuentro el id del mail y lo pinto
    const mail = mails.find(m => m.mailId == id);
    if(id == 0) {
        htmlString += `
        <article class="message_card">
        <div class="message_none">
            <h3>No conversations selected</h3>
        </div>
        </article>`;
    }else{
        htmlString += `
        <article class="message_card">
            <header class="message_header">
                <div class="message_user">
                    <img src="${mail.from.pic}" alt="${mail.from.name}'s pic">
                </div>
                <div class="from">
                    <h6 class="grey"><a class="user_name">${mail.from.name}</a></h6>
                    <span class="material-icons">arrow_drop_down</span>
                </div>
                <div class="to">
                    <h6 class="grey"> to <a class="user_name">${mail.to.mail}</a></h6>
                </div>
            </header>
    
            <div class="message_main">
                <h6 class="timer">${formatDate(mail.message.date)}</h6>
                <h1 class="title">${formatMessageSubject(mail.message.subject)}</h1>
                <h4 class="content">
                    ${mail.message.text}
                    <div class="image">
                        <img src="${mail.message.image}" alt="Message image">
                    </div>
                </h4>
            </div>
    
            <div class="message_reply">
                <form>
                    <textarea class="reply"></textarea>
                </form>
                <div class="option_line">
                    <div class="options">
                        <span class="material-icons">format_underlined</span>
                        <span class="material-icons rotate-90">attachment</span>
                        <span class="material-icons">crop_original</span>
                        <span class="material-icons rotate-45">link</span>
                        <span class="material-icons">insert_emoticon</span>
                    </div>
                    <button type="button" class="reply_button"> 
                        <h5 class="send">Send </h5>
                        <span class="material-icons rotate180">keyboard_backspace</span>
                    </button>
    
                </div>
            </div>
        </article>
        `;
    }

    const mainSpace = document.querySelector('.main');
    mainSpace.innerHTML = htmlString;  
};


