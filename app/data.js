const mails_raw = `[
{
    "mailId": 1,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/111x137.png/dddddd/000000",
      "name": "Fancie Barhams",
      "mail": "upreshaw0@so-net.ne.jp"
    },
    "to": {
      "pic": "http://dummyimage.com/148x188.png/ff4444/ffffff",
      "name": "Ulrick Preshaw",
      "mail": "upreshaw0@redcross.org"
    },
    "message": {
      "subject": "lacinia sapien",
      "text": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      "date": "2020-12-24T07:17:04Z",
      "attach": true,
      "category": "primary",
      "image": "http://dummyimage.com/204x168.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 2,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/231x184.png/dddddd/000000",
      "name": "Zebadiah Horry",
      "mail": "elevey1@ftc.gov"
    },
    "to": {
      "pic": "http://dummyimage.com/100x201.png/ff4444/ffffff",
      "name": "Eb Levey",
      "mail": "elevey1@upenn.edu"
    },
    "message": {
      "subject": "turpis eget elit sodales scelerisque mauris sit",
      "text": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      "date": "2021-01-22T07:05:25Z",
      "attach": false,
      "category": "social",
      "image": "http://dummyimage.com/129x148.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "none"
    }
  }, {
    "mailId": 3,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/219x192.png/dddddd/000000",
      "name": "Adelice Anger",
      "mail": "voldmeadow2@ezinearticles.com"
    },
    "to": {
      "pic": "http://dummyimage.com/125x113.png/dddddd/000000",
      "name": "Vivyanne Oldmeadow",
      "mail": "voldmeadow2@sun.com"
    },
    "message": {
      "subject": "ut mauris eget massa tempor convallis nulla neque libero",
      "text": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      "date": "2020-12-14T02:21:20Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/230x106.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 4,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/224x105.png/cc0000/ffffff",
      "name": "Guthrey Normanvill",
      "mail": "lduffan3@addtoany.com"
    },
    "to": {
      "pic": "http://dummyimage.com/140x137.png/cc0000/ffffff",
      "name": "Linc Duffan",
      "mail": "lduffan3@tuttocitta.it"
    },
    "message": {
      "subject": "lobortis vel dapibus at diam",
      "text": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      "date": "2020-12-24T21:08:36Z",
      "attach": false,
      "category": "promotions",
      "image": "http://dummyimage.com/143x166.png/cc0000/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "none"
    }
  }, {
    "mailId": 5,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/213x233.png/cc0000/ffffff",
      "name": "Olympia Palser",
      "mail": "mouchterlony4@amazonaws.com"
    },
    "to": {
      "pic": "http://dummyimage.com/236x146.png/ff4444/ffffff",
      "name": "Moria Ouchterlony",
      "mail": "mouchterlony4@china.com.cn"
    },
    "message": {
      "subject": "felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet",
      "text": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.In congue. Etiam justo. Etiam pretium iaculis justo.In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      "date": "2021-01-02T00:12:06Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/120x239.png/dddddd/000000"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "work"
    }
  }, {
    "mailId": 6,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/206x104.png/cc0000/ffffff",
      "name": "Claresta Sneezem",
      "mail": "drosso5@illinois.edu"
    },
    "to": {
      "pic": "http://dummyimage.com/163x204.png/cc0000/ffffff",
      "name": "Donalt Rosso",
      "mail": "drosso5@bloglines.com"
    },
    "message": {
      "subject": "fringilla rhoncus mauris enim leo rhoncus sed",
      "text": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      "date": "2021-01-21T18:56:29Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/230x151.png/ff4444/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 7,
    "mailType": "draft",
    "from": {
      "pic": "http://dummyimage.com/219x124.png/cc0000/ffffff",
      "name": "Shelbi Artingstall",
      "mail": "hgatland6@pagesperso-orange.fr"
    },
    "to": {
      "pic": "http://dummyimage.com/135x137.png/ff4444/ffffff",
      "name": "Hermie Gatland",
      "mail": "hgatland6@senate.gov"
    },
    "message": {
      "subject": "metus sapien ut",
      "text": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      "date": "2021-01-06T00:04:42Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/243x208.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 8,
    "mailType": "draft",
    "from": {
      "pic": "http://dummyimage.com/194x211.png/5fa2dd/ffffff",
      "name": "Giorgi Cheater",
      "mail": "ubudd7@hexun.com"
    },
    "to": {
      "pic": "http://dummyimage.com/249x130.png/cc0000/ffffff",
      "name": "Udell Budd",
      "mail": "ubudd7@rambler.ru"
    },
    "message": {
      "subject": "ante vel ipsum praesent blandit lacinia erat vestibulum sed magna",
      "text": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      "date": "2021-01-05T13:11:31Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/163x195.png/cc0000/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "none"
    }
  }, {
    "mailId": 9,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/197x115.png/ff4444/ffffff",
      "name": "Land Welchman",
      "mail": "swixey8@salon.com"
    },
    "to": {
      "pic": "http://dummyimage.com/186x179.png/cc0000/ffffff",
      "name": "Sumner Wixey",
      "mail": "swixey8@marketwatch.com"
    },
    "message": {
      "subject": "quisque ut erat curabitur gravida nisi",
      "text": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      "date": "2021-01-05T19:24:52Z",
      "attach": false,
      "category": "social",
      "image": "http://dummyimage.com/147x142.png/ff4444/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "work"
    }
  }, {
    "mailId": 10,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/187x218.png/5fa2dd/ffffff",
      "name": "Rogerio Droogan",
      "mail": "igreenman9@domainmarket.com"
    },
    "to": {
      "pic": "http://dummyimage.com/162x197.png/5fa2dd/ffffff",
      "name": "Ignazio Greenman",
      "mail": "igreenman9@shutterfly.com"
    },
    "message": {
      "subject": "tempus semper est quam pharetra magna",
      "text": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "date": "2020-12-19T23:31:09Z",
      "attach": false,
      "category": "promotions",
      "image": "http://dummyimage.com/212x173.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 11,
    "mailType": "draft",
    "from": {
      "pic": "http://dummyimage.com/221x182.png/dddddd/000000",
      "name": "Kermit Islep",
      "mail": "nstuckforda@lulu.com"
    },
    "to": {
      "pic": "http://dummyimage.com/240x136.png/ff4444/ffffff",
      "name": "Nollie Stuckford",
      "mail": "nstuckforda@ezinearticles.com"
    },
    "message": {
      "subject": "amet",
      "text": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      "date": "2020-12-23T11:21:40Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/157x214.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "none"
    }
  }, {
    "mailId": 12,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/244x139.png/5fa2dd/ffffff",
      "name": "Sarita McGahy",
      "mail": "jholleyb@mashable.com"
    },
    "to": {
      "pic": "http://dummyimage.com/209x236.png/dddddd/000000",
      "name": "Jaynell Holley",
      "mail": "jholleyb@mozilla.org"
    },
    "message": {
      "subject": "dolor vel est donec odio justo sollicitudin ut suscipit a",
      "text": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      "date": "2020-12-16T22:55:19Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/171x244.png/dddddd/000000"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 13,
    "mailType": "draft",
    "from": {
      "pic": "http://dummyimage.com/181x237.png/cc0000/ffffff",
      "name": "Verina Drew-Clifton",
      "mail": "afishpoolc@macromedia.com"
    },
    "to": {
      "pic": "http://dummyimage.com/172x168.png/5fa2dd/ffffff",
      "name": "Amitie Fishpool",
      "mail": "afishpoolc@mapquest.com"
    },
    "message": {
      "subject": "lectus in est risus auctor sed tristique",
      "text": "Sed ante. Vivamus tortor. Duis mattis egestas metus.Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.In congue. Etiam justo. Etiam pretium iaculis justo.",
      "date": "2021-01-24T18:50:33Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/212x119.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "none"
    }
  }, {
    "mailId": 14,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/108x168.png/5fa2dd/ffffff",
      "name": "Inglis Pischof",
      "mail": "bspreckleyd@bing.com"
    },
    "to": {
      "pic": "http://dummyimage.com/195x140.png/ff4444/ffffff",
      "name": "Brinna Spreckley",
      "mail": "bspreckleyd@cbslocal.com"
    },
    "message": {
      "subject": "sit",
      "text": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      "date": "2021-01-27T21:18:20Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/209x182.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "work"
    }
  }, {
    "mailId": 15,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/204x186.png/5fa2dd/ffffff",
      "name": "Anica Danilovitch",
      "mail": "ggiacomozzoe@is.gd"
    },
    "to": {
      "pic": "http://dummyimage.com/166x108.png/ff4444/ffffff",
      "name": "Gregoire Giacomozzo",
      "mail": "ggiacomozzoe@google.com.au"
    },
    "message": {
      "subject": "faucibus orci luctus",
      "text": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      "date": "2021-01-01T12:26:20Z",
      "attach": false,
      "category": "social",
      "image": "http://dummyimage.com/122x189.png/ff4444/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "none"
    }
  }, {
    "mailId": 16,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/202x110.png/5fa2dd/ffffff",
      "name": "Aloin Liepins",
      "mail": "bleaknerf@sun.com"
    },
    "to": {
      "pic": "http://dummyimage.com/229x133.png/cc0000/ffffff",
      "name": "Benedict Leakner",
      "mail": "bleaknerf@cargocollective.com"
    },
    "message": {
      "subject": "iaculis diam erat fermentum justo nec condimentum neque sapien placerat",
      "text": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      "date": "2021-01-18T12:36:42Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/229x153.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 17,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/117x125.png/ff4444/ffffff",
      "name": "Frasco Daw",
      "mail": "sorreyg@accuweather.com"
    },
    "to": {
      "pic": "http://dummyimage.com/122x218.png/5fa2dd/ffffff",
      "name": "Sibilla Orrey",
      "mail": "sorreyg@jiathis.com"
    },
    "message": {
      "subject": "ut massa quis augue luctus tincidunt nulla",
      "text": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      "date": "2021-01-11T10:04:33Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/133x209.png/dddddd/000000"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 18,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/116x246.png/dddddd/000000",
      "name": "Nikolai Penson",
      "mail": "wmeechh@chicagotribune.com"
    },
    "to": {
      "pic": "http://dummyimage.com/115x172.png/dddddd/000000",
      "name": "Winny Meech",
      "mail": "wmeechh@simplemachines.org"
    },
    "message": {
      "subject": "sapien urna pretium nisl ut",
      "text": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.Fusce consequat. Nulla nisl. Nunc nisl.",
      "date": "2020-12-13T18:48:50Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/202x201.png/cc0000/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "work"
    }
  }, {
    "mailId": 19,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/135x241.png/5fa2dd/ffffff",
      "name": "Bella Connaughton",
      "mail": "rskurrayi@utexas.edu"
    },
    "to": {
      "pic": "http://dummyimage.com/110x157.png/5fa2dd/ffffff",
      "name": "Randy Skurray",
      "mail": "rskurrayi@jiathis.com"
    },
    "message": {
      "subject": "duis faucibus accumsan odio curabitur convallis duis consequat dui nec",
      "text": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "date": "2020-12-28T03:08:30Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/136x248.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "none"
    }
  }, {
    "mailId": 20,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/245x124.png/5fa2dd/ffffff",
      "name": "Bren Baskeyfied",
      "mail": "cgreggj@dmoz.org"
    },
    "to": {
      "pic": "http://dummyimage.com/189x231.png/dddddd/000000",
      "name": "Conrado Gregg",
      "mail": "cgreggj@dyndns.org"
    },
    "message": {
      "subject": "amet nunc viverra dapibus",
      "text": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      "date": "2020-12-15T01:41:35Z",
      "attach": false,
      "category": "social",
      "image": "http://dummyimage.com/212x177.png/cc0000/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 21,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/206x163.png/ff4444/ffffff",
      "name": "Marcellus McDonand",
      "mail": "corwink@webnode.com"
    },
    "to": {
      "pic": "http://dummyimage.com/166x159.png/ff4444/ffffff",
      "name": "Coriss Orwin",
      "mail": "corwink@amazonaws.com"
    },
    "message": {
      "subject": "sollicitudin ut",
      "text": "Fusce consequat. Nulla nisl. Nunc nisl.Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      "date": "2021-01-03T22:49:06Z",
      "attach": false,
      "category": "promotions",
      "image": "http://dummyimage.com/248x188.png/cc0000/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 22,
    "mailType": "draft",
    "from": {
      "pic": "http://dummyimage.com/101x239.png/cc0000/ffffff",
      "name": "Lorenza Obey",
      "mail": "rhancockl@infoseek.co.jp"
    },
    "to": {
      "pic": "http://dummyimage.com/176x170.png/dddddd/000000",
      "name": "Robbert Hancock",
      "mail": "rhancockl@auda.org.au"
    },
    "message": {
      "subject": "orci vehicula condimentum curabitur",
      "text": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      "date": "2020-12-28T21:59:46Z",
      "attach": false,
      "category": "promotions",
      "image": "http://dummyimage.com/110x227.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 23,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/237x149.png/5fa2dd/ffffff",
      "name": "Lenee Ketchell",
      "mail": "scottamm@nsw.gov.au"
    },
    "to": {
      "pic": "http://dummyimage.com/159x171.png/ff4444/ffffff",
      "name": "Shandie Cottam",
      "mail": "scottamm@narod.ru"
    },
    "message": {
      "subject": "donec ut dolor morbi vel lectus in quam",
      "text": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      "date": "2021-01-17T15:10:53Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/125x182.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "none"
    }
  }, {
    "mailId": 24,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/158x132.png/5fa2dd/ffffff",
      "name": "Sandi Cohalan",
      "mail": "lboldran@diigo.com"
    },
    "to": {
      "pic": "http://dummyimage.com/188x187.png/5fa2dd/ffffff",
      "name": "Leontine Boldra",
      "mail": "lboldran@list-manage.com"
    },
    "message": {
      "subject": "lectus pellentesque eget nunc donec quis orci eget",
      "text": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.Phasellus in felis. Donec semper sapien a libero. Nam dui.Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      "date": "2021-01-08T14:07:04Z",
      "attach": true,
      "category": "primary",
      "image": "http://dummyimage.com/135x170.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "work"
    }
  }, {
    "mailId": 25,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/229x229.png/ff4444/ffffff",
      "name": "Astrid Pennyman",
      "mail": "dvaggeso@icq.com"
    },
    "to": {
      "pic": "http://dummyimage.com/138x110.png/ff4444/ffffff",
      "name": "Demetri Vagges",
      "mail": "dvaggeso@example.com"
    },
    "message": {
      "subject": "pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit",
      "text": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "date": "2021-01-21T10:30:08Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/166x131.png/ff4444/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 26,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/165x166.png/ff4444/ffffff",
      "name": "Cyrillus Rowen",
      "mail": "hwintersp@patch.com"
    },
    "to": {
      "pic": "http://dummyimage.com/246x240.png/5fa2dd/ffffff",
      "name": "Hew Winters",
      "mail": "hwintersp@loc.gov"
    },
    "message": {
      "subject": "platea dictumst etiam",
      "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      "date": "2021-01-09T06:33:47Z",
      "attach": false,
      "category": "social",
      "image": "http://dummyimage.com/235x163.png/cc0000/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 27,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/241x217.png/ff4444/ffffff",
      "name": "Dorena Prewer",
      "mail": "folivetoq@soup.io"
    },
    "to": {
      "pic": "http://dummyimage.com/149x128.png/cc0000/ffffff",
      "name": "Frances Oliveto",
      "mail": "folivetoq@ask.com"
    },
    "message": {
      "subject": "curabitur gravida nisi at",
      "text": "Fusce consequat. Nulla nisl. Nunc nisl.Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      "date": "2020-12-15T06:16:36Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/128x179.png/ff4444/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "work"
    }
  }, {
    "mailId": 28,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/210x181.png/ff4444/ffffff",
      "name": "Marian Simonutti",
      "mail": "dbigbyr@discuz.net"
    },
    "to": {
      "pic": "http://dummyimage.com/117x183.png/dddddd/000000",
      "name": "Dorothea Bigby",
      "mail": "dbigbyr@tumblr.com"
    },
    "message": {
      "subject": "habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt",
      "text": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      "date": "2021-01-12T23:42:30Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/100x221.png/ff4444/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "none"
    }
  }, {
    "mailId": 29,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/237x118.png/5fa2dd/ffffff",
      "name": "Rockey Gornar",
      "mail": "mhydes@cdbaby.com"
    },
    "to": {
      "pic": "http://dummyimage.com/132x185.png/cc0000/ffffff",
      "name": "Marianna Hyde",
      "mail": "mhydes@uiuc.edu"
    },
    "message": {
      "subject": "accumsan odio",
      "text": "Sed ante. Vivamus tortor. Duis mattis egestas metus.Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      "date": "2020-12-13T10:35:35Z",
      "attach": true,
      "category": "primary",
      "image": "http://dummyimage.com/204x119.png/ff4444/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "none"
    }
  }, {
    "mailId": 30,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/222x232.png/dddddd/000000",
      "name": "Sallyanne Wormell",
      "mail": "mrulert@businesswire.com"
    },
    "to": {
      "pic": "http://dummyimage.com/213x203.png/ff4444/ffffff",
      "name": "Margo Ruler",
      "mail": "mrulert@1688.com"
    },
    "message": {
      "subject": "nulla integer",
      "text": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      "date": "2020-12-03T11:35:55Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/112x247.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "work"
    }
  }, {
    "mailId": 31,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/238x221.png/ff4444/ffffff",
      "name": "Odessa Rossborough",
      "mail": "nphillimoreu@shinystat.com"
    },
    "to": {
      "pic": "http://dummyimage.com/229x155.png/ff4444/ffffff",
      "name": "Noella Phillimore",
      "mail": "nphillimoreu@columbia.edu"
    },
    "message": {
      "subject": "dolor sit amet consectetuer adipiscing elit proin",
      "text": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      "date": "2021-01-19T13:18:12Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/226x217.png/ff4444/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "none"
    }
  }, {
    "mailId": 32,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/235x128.png/ff4444/ffffff",
      "name": "Jyoti Pestell",
      "mail": "mfrisdickv@mit.edu"
    },
    "to": {
      "pic": "http://dummyimage.com/204x191.png/ff4444/ffffff",
      "name": "Mozes Frisdick",
      "mail": "mfrisdickv@yelp.com"
    },
    "message": {
      "subject": "odio elementum eu interdum eu tincidunt",
      "text": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      "date": "2021-01-21T10:11:01Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/105x153.png/cc0000/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "work"
    }
  }, {
    "mailId": 33,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/179x227.png/5fa2dd/ffffff",
      "name": "Arlyn Sherreard",
      "mail": "gbaumberw@epa.gov"
    },
    "to": {
      "pic": "http://dummyimage.com/130x202.png/ff4444/ffffff",
      "name": "Glynnis Baumber",
      "mail": "gbaumberw@webmd.com"
    },
    "message": {
      "subject": "tristique fusce",
      "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      "date": "2020-12-29T17:19:09Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/193x248.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 34,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/217x188.png/ff4444/ffffff",
      "name": "Penny Lyst",
      "mail": "spopelayx@weather.com"
    },
    "to": {
      "pic": "http://dummyimage.com/103x167.png/5fa2dd/ffffff",
      "name": "Sibbie Popelay",
      "mail": "spopelayx@lycos.com"
    },
    "message": {
      "subject": "nulla neque libero convallis eget eleifend",
      "text": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      "date": "2020-12-13T12:47:50Z",
      "attach": true,
      "category": "primary",
      "image": "http://dummyimage.com/232x137.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 35,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/200x229.png/dddddd/000000",
      "name": "Olav Brabban",
      "mail": "ralboney@acquirethisname.com"
    },
    "to": {
      "pic": "http://dummyimage.com/229x231.png/5fa2dd/ffffff",
      "name": "Raphaela Albone",
      "mail": "ralboney@fastcompany.com"
    },
    "message": {
      "subject": "faucibus orci luctus et",
      "text": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.Fusce consequat. Nulla nisl. Nunc nisl.Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      "date": "2020-12-24T10:56:42Z",
      "attach": false,
      "category": "social",
      "image": "http://dummyimage.com/219x102.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 36,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/159x176.png/5fa2dd/ffffff",
      "name": "Elora Whewell",
      "mail": "edurnellz@people.com.cn"
    },
    "to": {
      "pic": "http://dummyimage.com/215x114.png/cc0000/ffffff",
      "name": "Eddie Durnell",
      "mail": "edurnellz@godaddy.com"
    },
    "message": {
      "subject": "primis in faucibus orci luctus et ultrices posuere",
      "text": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      "date": "2021-01-15T01:37:16Z",
      "attach": false,
      "category": "social",
      "image": "http://dummyimage.com/135x228.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 37,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/158x146.png/ff4444/ffffff",
      "name": "Valerye Churchard",
      "mail": "agooms10@yellowbook.com"
    },
    "to": {
      "pic": "http://dummyimage.com/143x167.png/cc0000/ffffff",
      "name": "Alessandra Gooms",
      "mail": "agooms10@oracle.com"
    },
    "message": {
      "subject": "justo sit amet sapien dignissim vestibulum vestibulum ante",
      "text": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      "date": "2021-01-10T01:16:35Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/186x139.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 38,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/207x180.png/5fa2dd/ffffff",
      "name": "Jacques Dameisele",
      "mail": "bwitcherley11@yolasite.com"
    },
    "to": {
      "pic": "http://dummyimage.com/124x120.png/5fa2dd/ffffff",
      "name": "Beau Witcherley",
      "mail": "bwitcherley11@fema.gov"
    },
    "message": {
      "subject": "enim sit amet nunc viverra dapibus nulla suscipit ligula in",
      "text": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      "date": "2020-12-24T01:03:30Z",
      "attach": true,
      "category": "primary",
      "image": "http://dummyimage.com/147x193.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "work"
    }
  }, {
    "mailId": 39,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/184x242.png/cc0000/ffffff",
      "name": "Ignaz Borkin",
      "mail": "cstansby12@privacy.gov.au"
    },
    "to": {
      "pic": "http://dummyimage.com/140x149.png/ff4444/ffffff",
      "name": "Cosmo Stansby",
      "mail": "cstansby12@people.com.cn"
    },
    "message": {
      "subject": "penatibus et magnis dis parturient montes nascetur ridiculus mus etiam",
      "text": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "date": "2020-12-29T21:32:28Z",
      "attach": true,
      "category": "primary",
      "image": "http://dummyimage.com/239x232.png/ff4444/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 40,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/223x206.png/ff4444/ffffff",
      "name": "Esta Skune",
      "mail": "bivens13@wikispaces.com"
    },
    "to": {
      "pic": "http://dummyimage.com/208x167.png/dddddd/000000",
      "name": "Billie Ivens",
      "mail": "bivens13@marriott.com"
    },
    "message": {
      "subject": "eu pede",
      "text": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.Phasellus in felis. Donec semper sapien a libero. Nam dui.Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      "date": "2021-01-17T03:37:05Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/199x183.png/ff4444/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "work"
    }
  }, {
    "mailId": 41,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/110x193.png/5fa2dd/ffffff",
      "name": "Lincoln Cradoc",
      "mail": "bfarfalameev14@hc360.com"
    },
    "to": {
      "pic": "http://dummyimage.com/113x247.png/dddddd/000000",
      "name": "Betsey Farfalameev",
      "mail": "bfarfalameev14@vk.com"
    },
    "message": {
      "subject": "ultrices posuere cubilia curae nulla dapibus dolor vel est donec",
      "text": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      "date": "2020-12-18T09:12:17Z",
      "attach": false,
      "category": "promotions",
      "image": "http://dummyimage.com/150x103.png/ff4444/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "work"
    }
  }, {
    "mailId": 42,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/222x143.png/ff4444/ffffff",
      "name": "Brendin Onraet",
      "mail": "acheverell15@is.gd"
    },
    "to": {
      "pic": "http://dummyimage.com/171x206.png/cc0000/ffffff",
      "name": "Adriana Cheverell",
      "mail": "acheverell15@jimdo.com"
    },
    "message": {
      "subject": "magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet",
      "text": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      "date": "2020-12-13T01:57:19Z",
      "attach": true,
      "category": "primary",
      "image": "http://dummyimage.com/155x173.png/ff4444/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 43,
    "mailType": "draft",
    "from": {
      "pic": "http://dummyimage.com/106x146.png/5fa2dd/ffffff",
      "name": "Ailey Comiskey",
      "mail": "cchampness16@europa.eu"
    },
    "to": {
      "pic": "http://dummyimage.com/231x137.png/ff4444/ffffff",
      "name": "Candie Champness",
      "mail": "cchampness16@un.org"
    },
    "message": {
      "subject": "quisque id",
      "text": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      "date": "2020-12-13T17:52:23Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/114x235.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "work"
    }
  }, {
    "mailId": 44,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/127x191.png/dddddd/000000",
      "name": "Virgie Bartoli",
      "mail": "jcoffey17@smh.com.au"
    },
    "to": {
      "pic": "http://dummyimage.com/230x172.png/ff4444/ffffff",
      "name": "Jeffie Coffey",
      "mail": "jcoffey17@mit.edu"
    },
    "message": {
      "subject": "mauris non ligula pellentesque ultrices phasellus id sapien",
      "text": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      "date": "2020-12-19T22:12:52Z",
      "attach": false,
      "category": "promotions",
      "image": "http://dummyimage.com/229x104.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 45,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/189x248.png/cc0000/ffffff",
      "name": "Calypso Matussov",
      "mail": "lswainger18@nba.com"
    },
    "to": {
      "pic": "http://dummyimage.com/114x147.png/cc0000/ffffff",
      "name": "Loise Swainger",
      "mail": "lswainger18@sphinn.com"
    },
    "message": {
      "subject": "primis in faucibus",
      "text": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      "date": "2020-12-04T10:59:26Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/182x100.png/dddddd/000000"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "none"
    }
  }, {
    "mailId": 46,
    "mailType": "draft",
    "from": {
      "pic": "http://dummyimage.com/202x140.png/ff4444/ffffff",
      "name": "Colene Bestwall",
      "mail": "szammett19@engadget.com"
    },
    "to": {
      "pic": "http://dummyimage.com/101x104.png/5fa2dd/ffffff",
      "name": "Sascha Zammett",
      "mail": "szammett19@ebay.co.uk"
    },
    "message": {
      "subject": "varius nulla facilisi cras non velit",
      "text": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      "date": "2020-12-13T15:36:49Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/241x198.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 47,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/163x236.png/dddddd/000000",
      "name": "Sherwin Vossing",
      "mail": "jtrippett1a@de.vu"
    },
    "to": {
      "pic": "http://dummyimage.com/126x120.png/dddddd/000000",
      "name": "Joete Trippett",
      "mail": "jtrippett1a@joomla.org"
    },
    "message": {
      "subject": "lorem id ligula",
      "text": "Phasellus in felis. Donec semper sapien a libero. Nam dui.Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      "date": "2021-01-12T09:00:38Z",
      "attach": false,
      "category": "social",
      "image": "http://dummyimage.com/218x122.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 48,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/244x233.png/5fa2dd/ffffff",
      "name": "Hunfredo Dofty",
      "mail": "anardi1b@issuu.com"
    },
    "to": {
      "pic": "http://dummyimage.com/106x247.png/dddddd/000000",
      "name": "Agace Nardi",
      "mail": "anardi1b@sciencedirect.com"
    },
    "message": {
      "subject": "leo odio condimentum id luctus nec molestie sed justo pellentesque",
      "text": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      "date": "2021-01-13T12:38:58Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/157x179.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 49,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/201x213.png/cc0000/ffffff",
      "name": "Gizela Glynn",
      "mail": "skennaird1c@economist.com"
    },
    "to": {
      "pic": "http://dummyimage.com/148x195.png/dddddd/000000",
      "name": "Starr Kennaird",
      "mail": "skennaird1c@oaic.gov.au"
    },
    "message": {
      "subject": "ut odio cras mi pede",
      "text": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      "date": "2021-01-29T19:47:39Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/202x204.png/dddddd/000000"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 50,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/174x112.png/ff4444/ffffff",
      "name": "Cordelie Formby",
      "mail": "fbeningfield1d@uol.com.br"
    },
    "to": {
      "pic": "http://dummyimage.com/142x238.png/dddddd/000000",
      "name": "Florrie Beningfield",
      "mail": "fbeningfield1d@xinhuanet.com"
    },
    "message": {
      "subject": "faucibus cursus urna ut tellus nulla ut erat id mauris",
      "text": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.Phasellus in felis. Donec semper sapien a libero. Nam dui.Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      "date": "2021-01-25T09:33:13Z",
      "attach": false,
      "category": "social",
      "image": "http://dummyimage.com/138x158.png/ff4444/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "work"
    }
  }, {
    "mailId": 51,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/171x103.png/cc0000/ffffff",
      "name": "Nerty Tapsell",
      "mail": "blenchenko1e@facebook.com"
    },
    "to": {
      "pic": "http://dummyimage.com/239x230.png/5fa2dd/ffffff",
      "name": "Brok Lenchenko",
      "mail": "blenchenko1e@123-reg.co.uk"
    },
    "message": {
      "subject": "turpis sed ante vivamus tortor duis",
      "text": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.In congue. Etiam justo. Etiam pretium iaculis justo.",
      "date": "2020-12-27T11:16:33Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/158x204.png/dddddd/000000"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 52,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/225x197.png/cc0000/ffffff",
      "name": "Wittie Dye",
      "mail": "notham1f@hp.com"
    },
    "to": {
      "pic": "http://dummyimage.com/221x161.png/5fa2dd/ffffff",
      "name": "Nero Otham",
      "mail": "notham1f@nydailynews.com"
    },
    "message": {
      "subject": "praesent",
      "text": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      "date": "2021-01-13T18:25:08Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/236x135.png/ff4444/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 53,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/134x210.png/ff4444/ffffff",
      "name": "Alexis Salomon",
      "mail": "sabba1g@biglobe.ne.jp"
    },
    "to": {
      "pic": "http://dummyimage.com/238x132.png/cc0000/ffffff",
      "name": "Shara Abba",
      "mail": "sabba1g@mail.ru"
    },
    "message": {
      "subject": "amet sem fusce consequat nulla nisl nunc",
      "text": "In congue. Etiam justo. Etiam pretium iaculis justo.In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      "date": "2020-12-23T22:17:03Z",
      "attach": false,
      "category": "promotions",
      "image": "http://dummyimage.com/169x237.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "none"
    }
  }, {
    "mailId": 54,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/198x226.png/ff4444/ffffff",
      "name": "Ray Dottrell",
      "mail": "bclamp1h@shinystat.com"
    },
    "to": {
      "pic": "http://dummyimage.com/137x226.png/cc0000/ffffff",
      "name": "Bertine Clamp",
      "mail": "bclamp1h@soup.io"
    },
    "message": {
      "subject": "turpis adipiscing lorem vitae mattis nibh ligula nec",
      "text": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      "date": "2020-12-12T17:05:24Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/108x106.png/dddddd/000000"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 55,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/101x110.png/5fa2dd/ffffff",
      "name": "Yolande Peacop",
      "mail": "bbendon1i@joomla.org"
    },
    "to": {
      "pic": "http://dummyimage.com/111x218.png/5fa2dd/ffffff",
      "name": "Bear Bendon",
      "mail": "bbendon1i@dell.com"
    },
    "message": {
      "subject": "in imperdiet et commodo vulputate",
      "text": "In congue. Etiam justo. Etiam pretium iaculis justo.In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      "date": "2021-01-28T20:36:35Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/122x181.png/ff4444/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "work"
    }
  }, {
    "mailId": 56,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/225x131.png/dddddd/000000",
      "name": "Hamlin Gollard",
      "mail": "pbatter1j@independent.co.uk"
    },
    "to": {
      "pic": "http://dummyimage.com/110x110.png/cc0000/ffffff",
      "name": "Phil Batter",
      "mail": "pbatter1j@xinhuanet.com"
    },
    "message": {
      "subject": "sapien varius ut blandit non interdum in ante vestibulum",
      "text": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "date": "2021-01-11T09:51:37Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/160x209.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 57,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/120x169.png/dddddd/000000",
      "name": "Bernardina Dan",
      "mail": "eyewdale1k@unicef.org"
    },
    "to": {
      "pic": "http://dummyimage.com/184x244.png/5fa2dd/ffffff",
      "name": "Elyssa Yewdale",
      "mail": "eyewdale1k@unc.edu"
    },
    "message": {
      "subject": "porttitor id consequat in consequat",
      "text": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      "date": "2020-12-20T08:20:22Z",
      "attach": false,
      "category": "promotions",
      "image": "http://dummyimage.com/180x148.png/ff4444/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "none"
    }
  }, {
    "mailId": 58,
    "mailType": "draft",
    "from": {
      "pic": "http://dummyimage.com/166x161.png/5fa2dd/ffffff",
      "name": "Josias Werndly",
      "mail": "lwallage1l@wufoo.com"
    },
    "to": {
      "pic": "http://dummyimage.com/242x240.png/5fa2dd/ffffff",
      "name": "Leupold Wallage",
      "mail": "lwallage1l@youtu.be"
    },
    "message": {
      "subject": "id lobortis",
      "text": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.Phasellus in felis. Donec semper sapien a libero. Nam dui.Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      "date": "2020-12-27T11:54:14Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/197x132.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "work"
    }
  }, {
    "mailId": 59,
    "mailType": "draft",
    "from": {
      "pic": "http://dummyimage.com/165x161.png/cc0000/ffffff",
      "name": "Errol Clancy",
      "mail": "tdemcak1m@shinystat.com"
    },
    "to": {
      "pic": "http://dummyimage.com/196x244.png/dddddd/000000",
      "name": "Tracy Demcak",
      "mail": "tdemcak1m@unc.edu"
    },
    "message": {
      "subject": "quis tortor id nulla ultrices",
      "text": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      "date": "2020-12-24T15:59:29Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/177x160.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 60,
    "mailType": "draft",
    "from": {
      "pic": "http://dummyimage.com/136x173.png/cc0000/ffffff",
      "name": "Odessa Digwood",
      "mail": "ccopnar1n@reference.com"
    },
    "to": {
      "pic": "http://dummyimage.com/173x147.png/ff4444/ffffff",
      "name": "Cole Copnar",
      "mail": "ccopnar1n@cisco.com"
    },
    "message": {
      "subject": "imperdiet nullam orci",
      "text": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      "date": "2020-12-28T18:58:41Z",
      "attach": true,
      "category": "primary",
      "image": "http://dummyimage.com/172x161.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 61,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/192x179.png/cc0000/ffffff",
      "name": "Lisha Collyear",
      "mail": "ktennick1o@utexas.edu"
    },
    "to": {
      "pic": "http://dummyimage.com/166x124.png/ff4444/ffffff",
      "name": "Kingsly Tennick",
      "mail": "ktennick1o@wunderground.com"
    },
    "message": {
      "subject": "amet consectetuer adipiscing elit proin risus praesent lectus vestibulum",
      "text": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.Fusce consequat. Nulla nisl. Nunc nisl.Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      "date": "2020-12-02T08:04:59Z",
      "attach": false,
      "category": "promotions",
      "image": "http://dummyimage.com/165x130.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 62,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/126x235.png/ff4444/ffffff",
      "name": "Minny Scottesmoor",
      "mail": "cbrou1p@geocities.jp"
    },
    "to": {
      "pic": "http://dummyimage.com/103x218.png/5fa2dd/ffffff",
      "name": "Corbie Brou",
      "mail": "cbrou1p@intel.com"
    },
    "message": {
      "subject": "elit proin interdum mauris non ligula pellentesque ultrices",
      "text": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      "date": "2020-12-06T00:14:40Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/190x249.png/dddddd/000000"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 63,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/230x213.png/ff4444/ffffff",
      "name": "Harald Merredy",
      "mail": "kshillaker1q@vinaora.com"
    },
    "to": {
      "pic": "http://dummyimage.com/166x212.png/dddddd/000000",
      "name": "Klement Shillaker",
      "mail": "kshillaker1q@vkontakte.ru"
    },
    "message": {
      "subject": "aenean lectus pellentesque eget nunc",
      "text": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      "date": "2021-01-21T02:47:59Z",
      "attach": false,
      "category": "social",
      "image": "http://dummyimage.com/156x158.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "none"
    }
  }, {
    "mailId": 64,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/250x236.png/ff4444/ffffff",
      "name": "Shandy Lovelady",
      "mail": "aeasom1r@storify.com"
    },
    "to": {
      "pic": "http://dummyimage.com/178x212.png/5fa2dd/ffffff",
      "name": "Arluene Easom",
      "mail": "aeasom1r@phoca.cz"
    },
    "message": {
      "subject": "lectus suspendisse potenti in eleifend quam",
      "text": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      "date": "2020-12-31T09:06:02Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/171x139.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 65,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/250x144.png/ff4444/ffffff",
      "name": "Gerick D'Souza",
      "mail": "fpowner1s@mayoclinic.com"
    },
    "to": {
      "pic": "http://dummyimage.com/233x221.png/dddddd/000000",
      "name": "Franky Powner",
      "mail": "fpowner1s@xrea.com"
    },
    "message": {
      "subject": "dolor vel est donec",
      "text": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      "date": "2020-12-09T17:06:21Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/107x216.png/ff4444/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "work"
    }
  }, {
    "mailId": 66,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/207x216.png/ff4444/ffffff",
      "name": "Helena Row",
      "mail": "brehme1t@dion.ne.jp"
    },
    "to": {
      "pic": "http://dummyimage.com/196x161.png/5fa2dd/ffffff",
      "name": "Brittney Rehme",
      "mail": "brehme1t@nifty.com"
    },
    "message": {
      "subject": "neque vestibulum eget vulputate ut ultrices",
      "text": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      "date": "2020-12-03T23:40:18Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/100x174.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "none"
    }
  }, {
    "mailId": 67,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/147x134.png/5fa2dd/ffffff",
      "name": "Tallia Lusk",
      "mail": "ctonna1u@qq.com"
    },
    "to": {
      "pic": "http://dummyimage.com/244x230.png/dddddd/000000",
      "name": "Caralie Tonna",
      "mail": "ctonna1u@rambler.ru"
    },
    "message": {
      "subject": "orci luctus et ultrices posuere cubilia curae duis faucibus accumsan",
      "text": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      "date": "2020-12-16T05:02:48Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/185x191.png/cc0000/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "none"
    }
  }, {
    "mailId": 68,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/216x153.png/cc0000/ffffff",
      "name": "Frayda Helversen",
      "mail": "cbellhouse1v@google.it"
    },
    "to": {
      "pic": "http://dummyimage.com/133x204.png/dddddd/000000",
      "name": "Casandra Bellhouse",
      "mail": "cbellhouse1v@tiny.cc"
    },
    "message": {
      "subject": "rhoncus sed vestibulum sit amet cursus id turpis integer aliquet",
      "text": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      "date": "2020-12-04T21:53:36Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/233x163.png/ff4444/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "none"
    }
  }, {
    "mailId": 69,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/221x142.png/ff4444/ffffff",
      "name": "Sayers Eagan",
      "mail": "lkneller1w@163.com"
    },
    "to": {
      "pic": "http://dummyimage.com/177x241.png/dddddd/000000",
      "name": "Leighton Kneller",
      "mail": "lkneller1w@google.pl"
    },
    "message": {
      "subject": "quis tortor id nulla ultrices aliquet maecenas",
      "text": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      "date": "2021-01-05T03:32:18Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/212x180.png/ff4444/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "none"
    }
  }, {
    "mailId": 70,
    "mailType": "draft",
    "from": {
      "pic": "http://dummyimage.com/149x143.png/dddddd/000000",
      "name": "Reese Longmire",
      "mail": "epallent1x@soup.io"
    },
    "to": {
      "pic": "http://dummyimage.com/151x154.png/5fa2dd/ffffff",
      "name": "Emalee Pallent",
      "mail": "epallent1x@gnu.org"
    },
    "message": {
      "subject": "elit ac nulla sed vel enim sit",
      "text": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      "date": "2020-12-02T15:55:47Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/179x136.png/cc0000/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 71,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/206x230.png/ff4444/ffffff",
      "name": "Alisa Hyatt",
      "mail": "pweddeburn1y@springer.com"
    },
    "to": {
      "pic": "http://dummyimage.com/245x189.png/5fa2dd/ffffff",
      "name": "Perry Weddeburn",
      "mail": "pweddeburn1y@seesaa.net"
    },
    "message": {
      "subject": "ut rhoncus aliquet pulvinar sed nisl",
      "text": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "date": "2021-01-08T09:05:30Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/112x162.png/ff4444/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "work"
    }
  }, {
    "mailId": 72,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/245x240.png/cc0000/ffffff",
      "name": "Alick De Fraine",
      "mail": "rpiercey1z@simplemachines.org"
    },
    "to": {
      "pic": "http://dummyimage.com/165x159.png/ff4444/ffffff",
      "name": "Ruprecht Piercey",
      "mail": "rpiercey1z@ning.com"
    },
    "message": {
      "subject": "nam congue risus semper porta volutpat quam pede",
      "text": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      "date": "2021-01-10T08:22:37Z",
      "attach": false,
      "category": "social",
      "image": "http://dummyimage.com/230x129.png/ff4444/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "none"
    }
  }, {
    "mailId": 73,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/138x174.png/dddddd/000000",
      "name": "York Oiseau",
      "mail": "mmacalpyne20@multiply.com"
    },
    "to": {
      "pic": "http://dummyimage.com/195x187.png/5fa2dd/ffffff",
      "name": "Malorie MacAlpyne",
      "mail": "mmacalpyne20@ibm.com"
    },
    "message": {
      "subject": "gravida nisi at nibh in hac habitasse platea dictumst",
      "text": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      "date": "2021-01-25T04:16:58Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/114x188.png/ff4444/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "work"
    }
  }, {
    "mailId": 74,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/241x216.png/dddddd/000000",
      "name": "Barris Logsdale",
      "mail": "aeldershaw21@blogger.com"
    },
    "to": {
      "pic": "http://dummyimage.com/220x200.png/ff4444/ffffff",
      "name": "Adlai Eldershaw",
      "mail": "aeldershaw21@usnews.com"
    },
    "message": {
      "subject": "proin risus praesent lectus vestibulum",
      "text": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      "date": "2021-01-03T11:49:03Z",
      "attach": false,
      "category": "social",
      "image": "http://dummyimage.com/104x196.png/cc0000/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 75,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/110x136.png/5fa2dd/ffffff",
      "name": "Elaine Urwen",
      "mail": "mjealous22@cdbaby.com"
    },
    "to": {
      "pic": "http://dummyimage.com/195x164.png/ff4444/ffffff",
      "name": "Mellicent Jealous",
      "mail": "mjealous22@twitpic.com"
    },
    "message": {
      "subject": "vivamus vestibulum sagittis sapien",
      "text": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      "date": "2021-01-26T22:19:09Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/140x239.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 76,
    "mailType": "draft",
    "from": {
      "pic": "http://dummyimage.com/248x137.png/dddddd/000000",
      "name": "Dodi Rait",
      "mail": "amoscone23@wsj.com"
    },
    "to": {
      "pic": "http://dummyimage.com/245x166.png/ff4444/ffffff",
      "name": "Alvin Moscone",
      "mail": "amoscone23@usnews.com"
    },
    "message": {
      "subject": "hac habitasse platea",
      "text": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      "date": "2020-12-06T10:46:52Z",
      "attach": false,
      "category": "social",
      "image": "http://dummyimage.com/108x247.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "none"
    }
  }, {
    "mailId": 77,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/162x167.png/dddddd/000000",
      "name": "Price Medcraft",
      "mail": "gcubberley24@163.com"
    },
    "to": {
      "pic": "http://dummyimage.com/234x247.png/5fa2dd/ffffff",
      "name": "Graeme Cubberley",
      "mail": "gcubberley24@senate.gov"
    },
    "message": {
      "subject": "ut erat",
      "text": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      "date": "2021-01-15T06:20:45Z",
      "attach": true,
      "category": "primary",
      "image": "http://dummyimage.com/232x248.png/ff4444/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "none"
    }
  }, {
    "mailId": 78,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/154x248.png/cc0000/ffffff",
      "name": "Ilaire Bullick",
      "mail": "mmarchbank25@youku.com"
    },
    "to": {
      "pic": "http://dummyimage.com/110x239.png/5fa2dd/ffffff",
      "name": "Milo Marchbank",
      "mail": "mmarchbank25@icio.us"
    },
    "message": {
      "subject": "consequat dui nec nisi volutpat",
      "text": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      "date": "2020-12-24T01:55:55Z",
      "attach": true,
      "category": "primary",
      "image": "http://dummyimage.com/213x232.png/ff4444/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "none"
    }
  }, {
    "mailId": 79,
    "mailType": "draft",
    "from": {
      "pic": "http://dummyimage.com/180x139.png/ff4444/ffffff",
      "name": "Kelli Rearie",
      "mail": "mkrzysztof26@npr.org"
    },
    "to": {
      "pic": "http://dummyimage.com/105x235.png/ff4444/ffffff",
      "name": "Madelaine Krzysztof",
      "mail": "mkrzysztof26@ihg.com"
    },
    "message": {
      "subject": "sem mauris laoreet ut",
      "text": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.Sed ante. Vivamus tortor. Duis mattis egestas metus.Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      "date": "2021-01-03T20:46:43Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/114x180.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 80,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/114x127.png/5fa2dd/ffffff",
      "name": "Tammie Guise",
      "mail": "jjouandet27@amazonaws.com"
    },
    "to": {
      "pic": "http://dummyimage.com/129x129.png/cc0000/ffffff",
      "name": "Jennie Jouandet",
      "mail": "jjouandet27@springer.com"
    },
    "message": {
      "subject": "eu sapien cursus vestibulum proin eu mi nulla ac enim",
      "text": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      "date": "2021-01-15T16:47:37Z",
      "attach": true,
      "category": "primary",
      "image": "http://dummyimage.com/130x158.png/cc0000/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 81,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/183x121.png/dddddd/000000",
      "name": "Clayton Kohrsen",
      "mail": "tkidder28@harvard.edu"
    },
    "to": {
      "pic": "http://dummyimage.com/151x181.png/5fa2dd/ffffff",
      "name": "Torrie Kidder",
      "mail": "tkidder28@mtv.com"
    },
    "message": {
      "subject": "dis parturient",
      "text": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "date": "2021-01-12T12:50:02Z",
      "attach": true,
      "category": "primary",
      "image": "http://dummyimage.com/136x124.png/cc0000/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "none"
    }
  }, {
    "mailId": 82,
    "mailType": "draft",
    "from": {
      "pic": "http://dummyimage.com/205x249.png/ff4444/ffffff",
      "name": "Burty Piquard",
      "mail": "acapnerhurst29@live.com"
    },
    "to": {
      "pic": "http://dummyimage.com/237x207.png/dddddd/000000",
      "name": "Aviva Capnerhurst",
      "mail": "acapnerhurst29@technorati.com"
    },
    "message": {
      "subject": "id lobortis convallis tortor risus dapibus augue vel accumsan",
      "text": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      "date": "2021-01-12T07:27:34Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/143x102.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 83,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/226x142.png/ff4444/ffffff",
      "name": "Rodrique Calverd",
      "mail": "demmanueli2a@phpbb.com"
    },
    "to": {
      "pic": "http://dummyimage.com/105x139.png/cc0000/ffffff",
      "name": "Darrelle Emmanueli",
      "mail": "demmanueli2a@nyu.edu"
    },
    "message": {
      "subject": "rhoncus sed vestibulum sit amet cursus id",
      "text": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.In congue. Etiam justo. Etiam pretium iaculis justo.In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      "date": "2020-12-12T20:55:30Z",
      "attach": false,
      "category": "promotions",
      "image": "http://dummyimage.com/242x247.png/ff4444/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 84,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/179x133.png/5fa2dd/ffffff",
      "name": "Debor Bechley",
      "mail": "bblazevic2b@amazon.de"
    },
    "to": {
      "pic": "http://dummyimage.com/250x167.png/dddddd/000000",
      "name": "Bertram Blazevic",
      "mail": "bblazevic2b@pbs.org"
    },
    "message": {
      "subject": "orci pede venenatis non sodales sed tincidunt eu",
      "text": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      "date": "2021-01-10T23:59:41Z",
      "attach": true,
      "category": "primary",
      "image": "http://dummyimage.com/181x149.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "work"
    }
  }, {
    "mailId": 85,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/144x206.png/5fa2dd/ffffff",
      "name": "Clemmy holmes",
      "mail": "lbeldham2c@livejournal.com"
    },
    "to": {
      "pic": "http://dummyimage.com/117x117.png/cc0000/ffffff",
      "name": "Lorinda Beldham",
      "mail": "lbeldham2c@xing.com"
    },
    "message": {
      "subject": "erat nulla tempus vivamus in felis eu sapien cursus vestibulum",
      "text": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.Phasellus in felis. Donec semper sapien a libero. Nam dui.Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      "date": "2021-01-02T19:02:00Z",
      "attach": true,
      "category": "primary",
      "image": "http://dummyimage.com/156x202.png/ff4444/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": false,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 86,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/168x232.png/ff4444/ffffff",
      "name": "Marchall Spraging",
      "mail": "ejobin2d@un.org"
    },
    "to": {
      "pic": "http://dummyimage.com/127x208.png/dddddd/000000",
      "name": "Eden Jobin",
      "mail": "ejobin2d@webnode.com"
    },
    "message": {
      "subject": "convallis eget eleifend luctus",
      "text": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      "date": "2021-01-27T14:57:24Z",
      "attach": false,
      "category": "promotions",
      "image": "http://dummyimage.com/191x141.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 87,
    "mailType": "draft",
    "from": {
      "pic": "http://dummyimage.com/131x136.png/ff4444/ffffff",
      "name": "Ansell Wingham",
      "mail": "mpetworth2e@dailymail.co.uk"
    },
    "to": {
      "pic": "http://dummyimage.com/249x186.png/dddddd/000000",
      "name": "Merilee Petworth",
      "mail": "mpetworth2e@who.int"
    },
    "message": {
      "subject": "morbi porttitor lorem id ligula suspendisse ornare consequat lectus in",
      "text": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      "date": "2020-12-08T12:06:10Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/161x156.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 88,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/133x200.png/cc0000/ffffff",
      "name": "Tim Potteridge",
      "mail": "larbon2f@liveinternet.ru"
    },
    "to": {
      "pic": "http://dummyimage.com/109x158.png/dddddd/000000",
      "name": "Lucian Arbon",
      "mail": "larbon2f@epa.gov"
    },
    "message": {
      "subject": "sagittis sapien",
      "text": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      "date": "2020-12-15T17:26:49Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/145x161.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "none"
    }
  }, {
    "mailId": 89,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/194x103.png/5fa2dd/ffffff",
      "name": "Mendie Lamburn",
      "mail": "lquinane2g@wp.com"
    },
    "to": {
      "pic": "http://dummyimage.com/102x172.png/ff4444/ffffff",
      "name": "Lyn Quinane",
      "mail": "lquinane2g@yolasite.com"
    },
    "message": {
      "subject": "est risus auctor sed tristique in tempus sit amet",
      "text": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      "date": "2021-01-17T20:10:41Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/108x207.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "work"
    }
  }, {
    "mailId": 90,
    "mailType": "draft",
    "from": {
      "pic": "http://dummyimage.com/114x141.png/cc0000/ffffff",
      "name": "Natka Hartford",
      "mail": "kfrid2h@biglobe.ne.jp"
    },
    "to": {
      "pic": "http://dummyimage.com/213x242.png/ff4444/ffffff",
      "name": "Kayla Frid",
      "mail": "kfrid2h@joomla.org"
    },
    "message": {
      "subject": "vel ipsum praesent blandit lacinia",
      "text": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      "date": "2021-01-20T05:37:40Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/238x154.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "none"
    }
  }, {
    "mailId": 91,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/188x136.png/cc0000/ffffff",
      "name": "Marabel Lovitt",
      "mail": "zpaynter2i@gravatar.com"
    },
    "to": {
      "pic": "http://dummyimage.com/207x185.png/ff4444/ffffff",
      "name": "Zacherie Paynter",
      "mail": "zpaynter2i@creativecommons.org"
    },
    "message": {
      "subject": "primis in faucibus",
      "text": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "date": "2020-12-29T17:33:55Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/219x202.png/dddddd/000000"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 92,
    "mailType": "draft",
    "from": {
      "pic": "http://dummyimage.com/190x200.png/dddddd/000000",
      "name": "Lauri Clough",
      "mail": "mserridge2j@wikimedia.org"
    },
    "to": {
      "pic": "http://dummyimage.com/230x119.png/ff4444/ffffff",
      "name": "Meir Serridge",
      "mail": "mserridge2j@earthlink.net"
    },
    "message": {
      "subject": "lacinia aenean sit amet justo",
      "text": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      "date": "2020-12-24T02:34:12Z",
      "attach": true,
      "category": "promotions",
      "image": "http://dummyimage.com/164x105.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "work"
    }
  }, {
    "mailId": 93,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/146x223.png/dddddd/000000",
      "name": "Essie Kemetz",
      "mail": "livankovic2k@phoca.cz"
    },
    "to": {
      "pic": "http://dummyimage.com/105x118.png/ff4444/ffffff",
      "name": "Lyn Ivankovic",
      "mail": "livankovic2k@aol.com"
    },
    "message": {
      "subject": "ornare consequat lectus in est risus auctor",
      "text": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      "date": "2021-01-22T19:26:51Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/109x106.png/cc0000/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "discounts"
    }
  }, {
    "mailId": 94,
    "mailType": "received",
    "from": {
      "pic": "http://dummyimage.com/159x187.png/5fa2dd/ffffff",
      "name": "Kakalina Landal",
      "mail": "mwagstaff2l@shutterfly.com"
    },
    "to": {
      "pic": "http://dummyimage.com/107x158.png/cc0000/ffffff",
      "name": "Muriel Wagstaff",
      "mail": "mwagstaff2l@about.me"
    },
    "message": {
      "subject": "augue aliquam erat volutpat in congue etiam justo etiam pretium",
      "text": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      "date": "2020-12-10T20:06:09Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/190x101.png/ff4444/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 95,
    "mailType": "snoozed",
    "from": {
      "pic": "http://dummyimage.com/245x172.png/cc0000/ffffff",
      "name": "Constantia Trusler",
      "mail": "asisse2m@bluehost.com"
    },
    "to": {
      "pic": "http://dummyimage.com/218x153.png/5fa2dd/ffffff",
      "name": "Ardenia Sisse",
      "mail": "asisse2m@mozilla.org"
    },
    "message": {
      "subject": "justo maecenas rhoncus aliquam lacus morbi quis tortor",
      "text": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.In congue. Etiam justo. Etiam pretium iaculis justo.",
      "date": "2021-01-11T01:14:44Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/195x171.png/ff4444/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "work"
    }
  }, {
    "mailId": 96,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/202x163.png/cc0000/ffffff",
      "name": "Rance Hadlee",
      "mail": "asprowell2n@qq.com"
    },
    "to": {
      "pic": "http://dummyimage.com/173x227.png/5fa2dd/ffffff",
      "name": "Alli Sprowell",
      "mail": "asprowell2n@boston.com"
    },
    "message": {
      "subject": "turpis elementum ligula vehicula consequat morbi a ipsum integer a",
      "text": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.Fusce consequat. Nulla nisl. Nunc nisl.Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      "date": "2021-01-28T19:50:53Z",
      "attach": false,
      "category": "promotions",
      "image": "http://dummyimage.com/229x246.png/cc0000/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": true,
      "isHovered": false,
      "isFaved": false,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 97,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/234x171.png/dddddd/000000",
      "name": "Cecilio Bourne",
      "mail": "aschaumann2o@aol.com"
    },
    "to": {
      "pic": "http://dummyimage.com/209x184.png/dddddd/000000",
      "name": "Alexei Schaumann",
      "mail": "aschaumann2o@people.com.cn"
    },
    "message": {
      "subject": "id massa id nisl venenatis lacinia aenean sit",
      "text": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.In congue. Etiam justo. Etiam pretium iaculis justo.In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      "date": "2021-01-18T08:35:54Z",
      "attach": true,
      "category": "primary",
      "image": "http://dummyimage.com/169x198.png/dddddd/000000"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": false,
      "isFaved": true,
      "hasFolder": "work"
    }
  }, {
    "mailId": 98,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/187x243.png/dddddd/000000",
      "name": "Olly McShirrie",
      "mail": "ghuston2p@dell.com"
    },
    "to": {
      "pic": "http://dummyimage.com/170x233.png/dddddd/000000",
      "name": "Gabriellia Huston",
      "mail": "ghuston2p@tiny.cc"
    },
    "message": {
      "subject": "volutpat dui maecenas tristique est et tempus",
      "text": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      "date": "2021-01-25T16:22:17Z",
      "attach": false,
      "category": "primary",
      "image": "http://dummyimage.com/165x222.png/cc0000/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": true,
      "isFaved": false,
      "hasFolder": "none"
    }
  }, {
    "mailId": 99,
    "mailType": "deleted",
    "from": {
      "pic": "http://dummyimage.com/154x244.png/ff4444/ffffff",
      "name": "Karon Calderhead",
      "mail": "aariss2q@reddit.com"
    },
    "to": {
      "pic": "http://dummyimage.com/159x151.png/5fa2dd/ffffff",
      "name": "Aida Ariss",
      "mail": "aariss2q@comcast.net"
    },
    "message": {
      "subject": "cras mi pede malesuada in imperdiet",
      "text": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      "date": "2020-12-02T07:26:52Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/180x155.png/5fa2dd/ffffff"
    },
    "status": {
      "isRead": false,
      "isActive": true,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "personal"
    }
  }, {
    "mailId": 100,
    "mailType": "sent",
    "from": {
      "pic": "http://dummyimage.com/188x217.png/cc0000/ffffff",
      "name": "Will Loveland",
      "mail": "bbastide2r@intel.com"
    },
    "to": {
      "pic": "http://dummyimage.com/139x154.png/ff4444/ffffff",
      "name": "Benita Bastide",
      "mail": "bbastide2r@csmonitor.com"
    },
    "message": {
      "subject": "penatibus et magnis dis parturient montes nascetur ridiculus mus",
      "text": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "date": "2020-12-26T04:47:41Z",
      "attach": true,
      "category": "social",
      "image": "http://dummyimage.com/210x203.png/cc0000/ffffff"
    },
    "status": {
      "isRead": true,
      "isActive": false,
      "isHovered": true,
      "isFaved": true,
      "hasFolder": "personal"
    }
  }]
`;

const mails = JSON.parse(mails_raw);

const asideMenu = [ 
    {
        id: 1,
        icon: "inbox",
        label: "Inbox",
        counter: 0,
        status:{
            isActive: true,
            isHovered: false,
        },
        menuLevel: 0,
    },{
        id: 2,
        icon: "star",
        label: "Starred",
        counter: 0,
        status:{
            isActive: false,
            isHovered: false,
        },
        menuLevel: 0,
    },{
        id: 3,
        icon: "watch_later",
        label: "Snoozed",
        counter: 0,
        status:{
            isActive: false,
            isHovered: false,
        },
        menuLevel: 0,
    },{
        id: 4,
        icon: "send",
        label: "Sent",
        counter: 0,
        status:{
            isActive: false,
            isHovered: false,
        },
        menuLevel: 0,
    },{
        id: 5,
        icon: "description",
        label: "Drafts",
        counter: 0,
        status:{
            isActive: false,
            isHovered: false,
        },
        menuLevel: 0,
    },{
        id: 6,
        icon: "delete",
        label: "Deleted",
        counter: 0,
        status:{
            isActive: false,
            isHovered: false,
        },
        menuLevel: 0,
    }
];
    
const asideFolders = [ 
  {
    id: 1,
    icon: "folder",
    label: "Work",
    counter: 0,
    status:{
        isActive: false,
        isHovered: false,
    },
  },{
    id: 2,
    icon: "folder",
    label: "Discounts",
    counter: 0,
    status:{
        isActive: false,
        isHovered: false,
    },
  }, {
    id: 3,
    icon: "folder",
    label: "Personal",
    counter: 0,
    status:{
        isActive: false,
        isHovered: false,
    },
  },
]

const inboxCategory = [ 
  {
    id: 1,
    icon: "inbox",
    label: "Primary",
    counter: 0,
    status:{
        isActive: true,
        isHovered: false,
    },
  }, {
    id: 2,
    icon: "group",
    label: "Social",
    counter: 0,
    status:{
        isActive: false,
        isHovered: false,
    },
  }, {
    id: 3,
    icon: "local_offer",
    label: "Promotions",
    counter: 0,
    status:{
        isActive: false,
        isHovered: false,
    },
  }
]