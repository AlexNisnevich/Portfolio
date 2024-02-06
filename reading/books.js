const BOOKS = {
  2014: [
    {
      title: "The Amazing Adventures of Kavalier & Clay",
      author: "Michael Chabon",
      rating: 5,
      thanks: "Danielle"
    },
    {
      title: "Absurdistan",
      author: "Gary Shteyngart",
      rating: 3.5,
    },
    {
      title: "The Box Man",
      author: "Kobo Abe (tr. E. Dale Saunders)",
      rating: 3.5,
    },
    {
      title: "Omon Ra",
      author: "Victor Pelevin (tr. Andrew Bromfield)",
      rating: 4 ,
    },
    {
      title: "Is That a Fish in Your Ear?",
      author: "David Bellos",
      rating: 3,
    },
    {
      title: "The Crying of Lot 49",
      author: "Thomas Pynchon",
      rating: 4.5,
    },
    {
      title: "Einstein's Dream",
      author: "Alan Lightman",
      rating: 4.5,
      thanks: "Natasha"
    },
    {
      title: "Hard to Be a God",
      author: "Arkady and Boris Strugatsky (tr. Olena Bormashenko)",
      rating: 4.5,
    },
    {
      title: "A Dance With Dragons",
      author: "George R R Martin",
      rating: 4,
    },
    {
      title: "Definitely Maybe [new unexpurgated edition]",
      author: "Arkady and Boris Strugatsky (tr. Antonina W. Bouis)",
      rating: 4.5,
    },
    {
      title: "Travesties",
      author: "Tom Stoppard",
      rating: 4,
    },
    {
      title: "In the Beginning ... Was the Command Line",
      author: "Neal Stephenson",
      rating: 3,
    },
    {
      title: "A Heartbreaking Work of Staggering Genius",
      author: "Dave Eggers",
      rating: 4.5,
    },
    {
      title: "Grendel",
      author: "John Gardner",
      rating: 4,
    },
    {
      title: "American Pastoral",
      author: "Philip Roth",
      rating: 4.5,
      thanks: "mom & dad"
    },
    {
      title: "Colorblind: The Rise of Post-Racial Politics and the Retreat from Racial Equity",
      author: "Tim Wise",
      rating: 4.5,
      thanks: "Mel"
    },
    {
      title: "Cain",
      author: "Jose Saramago (tr. Margaret Jull Costa)",
      rating: 4.5,
      thanks: "mom & dad"
    },
    {
      title: "Blindness",
      author: "Jose Saramago (tr. Giovanni Pontiero)",
      rating: 5,
      thanks: "mom & dad"
    },
    {
      title: "The Magician's Land",
      author: "Lev Grossman",
      rating: 4.5,
    },
    {
      title: "The Ocean at the End of the Lane",
      author: "Neil Gaiman",
      rating: 4,
      thanks: "Danielle"
    },
    {
      title: "Bro",
      author: "Vladimir Sorokin (tr. Jamey Gambrell)",
      rating: 4,
      thanks: "mom & dad"
    },
    {
      title: "Ice",
      author: "Vladimir Sorokin (tr. Jamey Gambrell)",
      rating: 3.5,
      thanks: "mom & dad"
    },
    {
      title: "23,000",
      author: "Vladimir Sorokin (tr. Jamey Gambrell)",
      rating: 3,
      thanks: "mom & dad"
    },
    {
      title: "Seeing",
      author: "Jose Saramago",
      rating: 3.5,
    },
    {
      title: "Dubliners",
      author: "James Joyce",
      rating: 4,
    },
    {
      title: "\"The Death of Ivan Ilyich\"",
      author: "Leo Tolstoy",
      rating: 4.5,
    },
    {
      title: "What We Talk About When We Talk About Love",
      author: "Raymond Carver",
      rating: 5,
      thanks: "Danielle"
    },
    {
      title: "Goodbye, Columbus",
      author: "Philip Roth",
      rating: 4.5,
    },
    {
      title: "The Search for Heinrich Schlogel",
      author: "Martha Baillie",
      rating: 4.5,
      thanks: "Elise"
    }
  ],
  2015: [
    {
      title: "A Portrait of the Artist as a Young Man",
      author: "James Joyce",
      rating: 3,
    },
    {
      title: "They Shoot Horses, Don't They?",
      author: "Horace McCoy",
      rating: 4,
      thanks: "Asali"
    },
    {
      title: "Speak, Memory",
      author: "Vladimir Nabokov",
      rating: 4,
      thanks: "Asali"
    },
    {
      title: "Tenth of December",
      author: "George Saunders",
      rating: 5,
      thanks: "Danielle"
    },
    {
      title: "Freedom",
      author: "Jonathan Franzen",
      rating: 4.5,
      thanks: "Asali"
    },
    {
      title: "The Discovery of Neptune",
      author: "Morton Grosser",
      rating: 4,
      thanks: "Tikhon"
    },
    {
      title: "The Gigantic Beard That Was Evil",
      author: "Stephen Collins",
      rating: 4.5,
      thanks: "Danielle"
    },
    {
      title: "Infinite City",
      author: "Rebecca Solnit",
      rating: 4.5,
      thanks: "Asali"
    },
    {
      title: "Geek Sublime",
      author: "Vikram Chandra",
      rating: 3,
      thanks: "Danielle"
    },
    {
      title: "House of Leaves",
      author: "Mark Z. Danielewski",
      rating: 5,
      thanks: "James"
    },
    {
      title: "A Visit From the Goon Squad",
      author: "Jennifer Egan",
      rating: 4,
      thanks: "Asali"
    },
    {
      title: "New Urbanism and American Planning: The Conflict of Cultures",
      author: "Emily Talen",
      rating: 3,
    },
    {
      title: "Marx's Capital Illustrated",
      author: "David Smith and Phil Evans",
      rating: 4,
    },
    {
      title: "Men Explain Things to Me",
      author: "Rebecca Solnit",
      rating: 4,
    },
    {
      title: "The Dead Mountaineer's Inn: One More Last Rite for the Detective Genre",
      author: "Arkady and Boris Strugatsky (tr. Josh Billings)",
      rating: 4,
    },
    {
      title: "Everyman",
      author: "Philip Roth",
      rating: 4,
      thanks: "mom & dad"
    },
    {
      title: "The Secret History",
      author: "Donna Tartt",
      rating: 5,
    },
    {
      title: "I Am a Strange Loop",
      author: "Douglas Hofstadter",
      rating: 4.5,
    },
    {
      title: "The Handmaid's Tale",
      author: "Margaret Atwood",
      rating: 5,
      thanks: "Asali"
    },
    {
      title: "\"The Cheater's Guide to Love\"",
      author: "Junot Diaz",
      rating: 4.5,
    },
    {
      title: "Gentlemen of the Road",
      author: "Michael Chabon",
      rating: 3.5,
    },
    {
      title: "Doing Good Better",
      author: "William MacAskill",
      rating: 4,
    },
    {
      title: "The Brief Wondrous Life of Oscar Wao",
      author: "Junot Diaz",
      rating: 4.5,
    },
    {
      title: "The Pleasures and Sorrows of Work",
      author: "Alain de Botton",
      rating: 4.5,
      thanks: "Asali"
    },
    {
      title: "Iterating Grace",
      author: "Anonymous",
      rating: 2.5,
    },
    {
      title: "Arabs & Israel for Beginners",
      author: "Ron David",
      rating: 4,
    },
    {
      title: "Summa Technologiae",
      author: "Stanislaw Lem",
      rating: 4.5,
    },
  ],
  2016: [
    {
      title: "Travels with Herodotus",
      author: "Ryszard Kapu&#347;ci&#324;ski (tr. Glowczewska)",
      rating: 4.5,
      thanks: "Lily",
      review: "This is certainly an unusual concept for a book. Half of it is Kapu&#347;ci&#324;ski's account of his journeys through India, China, and Sudan as a bright-eyed young Polish correspondent. In parallel, he recounts stories from Herodotus's histories that his journeys remind him of. It's remarkable how believable the characters in his retellings are: in the end, perhaps we're not so different from the ancient Persians and Greeks."
    },
    {
      title: "The New And Improved Romie Futch",
      author: "Julia Elliott",
      rating: 4.5,
      review: `So, imagine "Flowers for Algernon" meets Moby-Dick. Now imagine it in a setting that's halfway between Southern Gothic and Saunders-esque playful dystopia. And throw in surreal taxidermy, giant pigs, and Monsanto. Romie Futch is all this and more.`
    },
    {
      title: "The Wind-Up-Bird Chronicle",
      author: "Haruki Murakami (tr. Jay Rubin)",
      rating: 5,
      thanks: "Lily",
      review: `It's almost two separate stories: a romantic drama about a fragile relationship and a gripping adventure through a surreal world. Either of them would make a good novel in itself, but Murakami's brilliance lies in how perfectly he weaves the two together. This is the kind of novel where half the fun comes from figuring out the connections and the twisted logic underlying it all (a feeling I also had reading House of Leaves last year).`
    },
    {
      title: "Postmodernism for Beginners",
      author: "Jim Powell, Joe Lee",
      rating: 4,
      thanks: "Mel",
      review: `Corny title aside, the "for Beginners" series has been blowing me away with its intelligence and wit. I came in thinking of "postmodernism" as just a punchline, and now I'm ordering books by Baudrillard. Powell & Lee do a fantastic job of distilling key ideas of postmodern writers and artists and giving them context.`
    },
    {
      title: "Bernie",
      author: "Ted Rall",
      rating: 3.5,
      review: `A surprisingly well-done graphic novel biography of Bernie Sanders. The section detailing the rise of the Democratic Leadership Council is a fascinating bit of history that I wasn't aware of.`
    },
    {
      title: "Y.T.",
      author: "Alexei Nikitin (tr. Anne Marie Jackson)",
      rating: 4,
      review: `A fascinating novella about a group of bored Ukrainian physics students who start a geopolitical role-playing game, and the consequences that follow. Nikitin's portrayal of Ukraine in the 80s and the 2000s is by turns bleak and satirical, reminding me somewhat of Dovlatov.`
    },
    {
      title: "The Proper Study of Mankind",
      author: "Isaiah Berlin",
      rating: 4.5,
      review: `No book on this list has affected the way I think as profoundly as this collection of essays. The biggest takeaway for me was his idea that there cannot be one single ideal to strive for ("value pluralism"). He traces this idea through history, from Vico to Herder, and along the way he presents fresh perspectives on Machiavelli and Tolstoy. Other highlights include his portraits of his Russian contemporaries and his argument against "scientific history".`
    },
    {
      title: "Alice in Bed",
      author: "Susan Sontag",
      rating: 4,
      thanks: "Asali",
      review: `How do you make a play about somebody who spent her entire life in bed? Not the easiest premise to work with, but Sontag does a masterful job. There's not really an overarching plot, but rather a series of vignettes, ranging from mundane family moments to a Lewis Carroll-esque tea party to a bizarre robbery scene. I would love to see a production of this play. I can only imagine what it looks like live.`
    },
    {
      title: "Collected Stories",
      author: "Stefan Zweig (tr. Anthea Bell)",
      rating: 4.5,
      thanks: "dad",
      review: `I can't believe that I hadn't heard of Zweig before I got this book! These are 22 of the best short stories I've ever read, all set against a beautifully-written European landscape. The prose is gorgeous even in translation, and the characters display an immense amount of humanity. Highlights: "The Miracles of Life", "The Governess", "Compulsion", "Fantastic Night", "Mendel the Bibliophile".`
    },
    {
      title: "Harry Potter and the Cursed Child",
      author: "Jack Thorne",
      rating: 2.5,
      review: `I'm not sure if this play was really necessary. It's certainly fun to see this world again, but the plot is quite silly and the characters are (with a couple major exceptions) pretty weak.`
    },
    {
      title: "The Doomed City",
      author: "Arkady and Boris Strugatsky (tr. Andrew Bromfield)",
      rating: 4,
      review: `I've been waiting for this translation for literally a decade. (Seriously, I was trying to translate it myself back in high school!) The premise is typical Strugatsky weirdness: a group of "volunteers" from throughout the 20th century find themselves in a city on an alien world for an "Experiment". Challenges present themselves, some Lynchian (a mysterious red brick house travels around abducting citizens), others political (a fascist coup overthrows the government), all while a group of "Mentors" watch from the sidelines. This is the Strugatskys at their most political, challenging the Soviet experiment overtly rather than metaphorically, and it's easy to see why it wasn't published until after perestroika.`
    },
    {
      title: "Farewell to the God of Plague",
      author: "Miriam Gross",
      rating: 3,
      thanks: "Asali",
      review: `A comprehensive, if at times dry, look into Mao's campaigns to eradicate schistosomiasis. Gross offers a nuanced portrayal of the responses of various classes of society to the campaign, challenging both Chinese and Western conventional narratives.`
    },
    {
      title: "Excellent Sheep",
      author: "William Deresiewicz",
      rating: 4.5,
      thanks: "Asali",
      review: `In this book-length adaptation of his 2008 essay "The Disadvantages of an Elite Education", Deresiewicz argues that the Ivy Leagues (and schools like them) are producing an educated elite  out of touch with the rest of the country. He forms his argument from both a detailed historical account of the American education system and hundreds of firsthand accounts from students. Unfortunately, he doesn't offer much in the way of solutions (aside from the usual clich&#233s), but it's a timely critique.`
    },
    {
      title: "The Stranger",
      author: "Albert Camus (tr. Stuart Gilbert)",
      rating: 4,
      review: `"Mother died today. Or maybe yesterday, I don't know." L'&#233tranger has a structure reminiscent of Crime and Punishment (part 1 is the crime, part 2 is the punishment), but unlike Raskolnikov, Meursault isn't a philosopher. He doesn't want to be the next Napoleon. He simply doesn't care: not about his society, not about the people around him, not about the necessity of crying at his mother's funeral. It's not easy to convey Meursault's perspective while still making him a sympathetic character, but Camus somehow accomplishes this.`
    },
    {
      title: "Death with Interruptions",
      author: "Jose Saramago (tr. Margaret Jull Costa)",
      rating: 3.5,
      review: `The first half is solid, full of that gentle yet piercing satire that I like in Saramago. The second half just seemed to drag on without ever reaching anything satisfactory.`
    },
    {
      title: "101 Things I Learned in Architecture School",
      author: "Matthew Frederick",
      rating: 4,
      review: `Another book with a cheesy title that taught me much more than I expected. Frederick cleverly illustrates concepts such as positive/negative space, parti, and denial/reward. While the lessons are all nominally about architecture, a lot of the core concepts seem to be applicable to, for example, music, as well.`
    },
    {
      title: "City of Tiny Lights",
      author: "Patrick Neale",
      rating: 3.5,
      review: `A neat little noir tale transported into modern multicultural London. Neale's levelheaded satire of the War on Terror is surprisingly prescient for 2005.`
    },
    {
      title: "The Book of Tea",
      author: "Okakura Kakuzō",
      rating: 4.5,
      review: `Okakura presents a passionate defense of what he calls "tea-ism", the philosophy of reveling in the aesthetics of the simple things in life. The book itself is an aesthetic marvel. Every paragraph is beautifully written, all the more remarkable given that Okakura learned English late in life.`
    },
    {
      title: "Soul of a New Machine",
      author: "Tracy Kidder",
      rating: 4,
      thanks: "Asali",
      review: `The most surprising part of reading Soul of a New Machine was how little things have changed since 1981. Kidder's depiction of Data General employees, their frustrations and motivations, is spot-on my experience at medium-to-large startups. Some of the characters reminded me so much of former coworkers that it felt uncanny. The more technical passages are sometimes dull (Kidder wrote it for an audience that understood very little about computers), but it's still a worthwhile read.`
    },
    {
      title: "Once Upon a Number",
      author: "John Allen Paulos",
      rating: 2.5,
      thanks: "Tikhon",
      review: `A collection of pieces about the relationship between mathematics and stories. Some chapters are alright, but I didn't feel like I really learned anything from it.`
    },
    {
      title: "The Word for World is Forest",
      author: "Ursula Le Guin",
      rating: 4,
      review: `This is Le Guin at her least subtle. The characters tend to be one-dimensional and the plot doesn't offer many surprises. But as a hard-hitting anti-colonial polemic, it certainly delivers. I especially enjoyed her exploration of the effects of communication and the depiction of dreaming among the Athsheans.`
    },
    {
      title: "War and Peace",
      author: "Leo Tolstoy (tr. Pevear & Volokhonsky)",
      rating: 5,
      thanks: "Asali",
      review: `Part sprawling epic novel, part meditation on the nature of history. Tolstoy gets inside his characters' heads so well that by the end of the book, I felt like they were old friends. All throughout, and particularly in the "war" sections, he argues against the Great Man theory of history and proposes a bottom-up view of historical events. The resulting work is long and messy and arguably not even a "novel" at all, but at the same time it's perfect for what it is. Isaac Babel said, "If the world could write by itself, it would write like Tolstoy," and after reading War and Peace I couldn't agree more.`
    },
  ],
  2017: [
    {
      title: "Unfathomable City",
      author: "Rebecca Solnit",
      rating: 4.5,
      review: `While Infinite City revealed fresh secrets of a city I already knew, Unfathomable City served as an unorthodox travel guide. Reading it on the plane to New Orleans, I was struck by the deep sense of love for the city that I could feel in each of the essays and maps, and the bustling energy evoked by the book was contagious.`
    },
    {
      title: "Ghostwritten",
      author: "David Mitchell",
      rating: 4,
      thanks: "Linchuan",
      review: `My first David Mitchell novel, and hopefully not my last. I loved some of the interlocking segments (particularly "Holy Mountain" and "Cape Clear Island"), didn't care for a few of them (especially "London"), and had mixed feelings about the spectacular ending.`
    },
    {
      title: "A People's History of the United States",
      author: "Howard Zinn",
      rating: 4.5,
      thanks: "Asali",
      review: `It's become almost a meme in certain circles, but this is nonetheless a remarkable book. It's not just a different perspective on history, but a different way of looking at history altogether: as the actions of ordinary people fighting for better lives rather than the whims of a few "great men". Tolstoy would be proud.`
    },
    {
      title: "Speaking American: How Y'all, Youse, and You Guys Talk",
      author: "Josh Katz",
      rating: 3,
      thanks: "mom & dad",
      review: `A neat visualization of a massive study. I just wish that there was some analysis to accompany it.`
    },
    {
      title: "The ABCs of Socialism",
      author: "ed. Bhaskar Sunkara",
      rating: 4,
      review: `Jacobin's first book-length publication is a slim volume that rebuts common misconceptions about socialism in a clear, no-nonsense prose that's anything but preachy. Its design is fantastic as well, from Wriggleworth's cartoon illustrations to the simple question-and-answer bookends for each chapter.`
    },
    {
      title: "Absolutely on Music",
      author: "Seiji Ozawa & Haruki Murakami (tr. Jay Rubin)",
      rating: 4,
      review: `Murakami, an avid classical music fan with no musical background, is the perfect foil to Ozawa, the knowledgeable yet affable conductor. Reading their casual chats about Beethoven and Mahler is great fun.`
    },
    {
      title: "BART: A Dramatic History of the Bay Area Rapid Transit System",
      author: "Michael C. Healy",
      rating: 4,
      review: `An engaging account of BART's history and operations, full of amusing anecdotes and overly excited chapter titles like "1977 and 1978 See Several Improvements and Added Services". Healy was BART's chief spokesperson for 32 years, and, while his insider status introduces a lot of bias, it also allows him to pepper the book with behind-the-scenes details. `
    },
    {
      title: "The Shape of Things",
      author: "Neil LaBute",
      rating: 3,
      thanks: "Asali and JP",
      review: `An interesting conceit, but it was difficult to care about such incredibly superficial characters.`
    },
    {
      title: "The City Shaped: Urban Patterns and Meanings Through History",
      author: "Spiro Kostof",
      rating: 4.5,
      review: `Kostof argues that traditional histories of urban design make the fatal flaw of assuming a linear progression of styles, and presents an alternative history based on morphology. In five chapters ("Organic" Patterns; The Grid; City as Diagram; The Grand Manner; The Urban Skyline), Kostof describes the development of five approaches to city-building, their patterns and variations, and the meanings ascribed to them throughout history. Through it all, he writes with such an engaging voice that you feel like you're getting a tour of the world's cities rather than reading a history book. I can't look at a city the same way after reading it.`
    },
    {
      title: "Snakes and Ladders: Glimpses of Modern India",
      author: "Gita Mehta",
      rating: 3.5,
      review: `A chaotic and exciting book about a chaotic and exciting country. In her essays, Mehta gives a whirlwind tour of India throughout the 20th century, covering politics, economics, spirituality, and culture, but the book really shines when she recounts her stories of growing up with independence-activist parents in the 1940s.`
    },
    {
      title: "How to Be a Jewish Mother",
      author: "Dan Greenberg",
      rating: 3,
      review: `Cute but dated vintage humor book.`
    },
    {
      title: "The Visual Display of Quantitative Information",
      author: "Edward Tufte",
      rating: 4,
      review: `The book is visually gorgeous, and Tufte's basic laws of information design (in particular the "data-ink ratio") provide a solid framework for reasoning about information graphics. But I didn't learn as much as I could have &#8212; the book was short and devoted too much time to some pet techniques that didn't seem particularly useful nowadays.`
    },
    {
      title: "Secondhand Time: The Last of the Soviets",
      author: "Svetlana Alexievich (tr. Bela Shayevich)",
      rating: 5,
      review: `If you're going to read any book about contemporary Russia, make it this one. Alexievich writes what she calls "novels in voices": stories told entirely through edited transcripts of hundreds of oral interviews. She's written about the Afghan war and Chernobyl, but Secondhand Time is arguably her most ambitious piece: a sprawling account of the first two decades of post-Soviet Russia and the disillusionment Russians felt after the collapse of the Soviet Union. She interviews everyone from gulag prisoners to NKVD interrogators, from jet-setting business-people to Central Asian migrant workers. It'll make you laugh, it'll make you cry, it'll make you feel a profound sense of empathy for a country in transition.`
    },
    {
      title: "The New Urbanism: Toward an Architecture of Community",
      author: "Peter Katz",
      rating: 3.5,
      review: `There are some nice essays by the New Urbanism pioneers (Calthorpe, DPZ, et al), but what really makes this book is the case studies of New Urbanism communities of all shapes throughout the U.S., from new towns like Seaside to revitalization projects like downtown Providence, all complete with beautiful city plans and architectural examples. A great source of inspiration.`
    },
    {
      title: "Lincoln in the Bardo",
      author: "George Saunders",
      rating: 4,
      review: `Imagine that a novella, a play, and a nonfiction biography had a bastard child. The action takes place in a cemetery, and, though it's ostensibly about Abraham Lincoln, he only appears for a few pages. It's difficult to describe what Lincoln in the Bardo *is* exactly, but whatever it is, it's gripping, poignant, and endlessly inventive.`
    },
    {
      title: "Hope in the Dark",
      author: "Rebecca Solnit",
      rating: 4,
      review: `In this collection of essays, Solnit argues that hope is just as important as fear in driving activism. Though most of the book dates back to 2004, it's as important a lesson now as ever.`
    },
    {
      title: "The God of Small things",
      author: "Arundhati Roy",
      rating: 5,
      review: `The most beautiful and heartbreaking novel I read this year. Roy's descriptions of life in rural Kerala are so vivid that you can practically smell the red banana trees. The story is intricately plotted, jumping backward and forward in time as the tale of the Kochamma family unfolds, and it keeps you hoping against hope even as a mounting sense of dread keeps building into an horrific climax. It's that rare sort of novel that not only sticks with you, but makes you feel like somehow it's been a part of you all along.`
    },
    {
      title: "The Works: Anatomy of a City",
      author: "Kate Ascher",
      rating: 3.5,
      review: `An enjoyable overview of the transportation, energy, communications, and waste infrastructure of New York City filled with marvelous diagrams. No profound insights here, but it's a pleasure to leaf through and chock-full of surprising facts.`
    },
    {
      title: "Kasimir Malevich and Suprematism",
      author: "Gilles N&#233ret",
      rating: 3.5,
      thanks: "mom",
      review: `An engaging and meticulously researched overview of an under-appreciated modern artist. Malevich is a somewhat enigmatic figure, but N&#233ret does an admirable job of explaining his philosophy.`
    },
    {
      title: "Where'd You Go, Bernadette",
      author: "Maria Semple",
      rating: 4,
      review: `A damn good satire of the tech industry, suburban life, the art world, and everything in between. Semple hooks you in with her goofy humor and it's not until you're halfway in that you suddenly realize how much you've cared about all these flawed yet lovable characters all along. I couldn't put it down, even through some questionable plot developments near the end.`
    },
    {
      title: "The Yellow Shadow",
      author: "V M Steele",
      rating: 1.5,
      review: `The casual racism at the core of the story doesn't age well at all, and the whole plot is frankly ridiculous.`
    },
    {
      title: "Nonstop Metropolis",
      author: "Rebecca Solnit and Joshua Jelly-Shapiro",
      rating: 4,
      review: `A lot of good pieces (I particularly liked the ones on the evolution of hip-hop), but overall it was more repetitive and less cohesive than its predecessors. The start was particularly shaky, with the first 5-6 maps all tackling similar ideas.`
    },
    {
      title: "Best Russian Short Stories",
      author: "Thomas Seltzer, ed.",
      rating: 4,
      review: `A comprehensive and surprisingly well-curated collection of Russian short stories from the 1920s, featuring both the heavy-hitters like Tolstoy and Gorky and relative unknowns like Saltykov-Shchedrin and Sologub, all in lively, readable translations. Highlights: "The Queen of Spades" (Pushkin), "The Overcoat" (Gogol), "The Bet" (Chekhov), "Lazarus" (Andreyev).`
    },
    {
      title: "Baudolino",
      author: "Umberto Eco (tr. William Weaver)",
      rating: 4,
      thanks: "Bakery Bar in NOLA",
      review: `A lighthearted medieval adventure tale told in the style of medieval adventure tales, and an exploration of languages (much of the novel is written in a garbled pseudo-Latin), the complicated role of religion in medieval politics, and how objects obtain meaning (much of the adventure involves religious relics, real and fictional). It's not hard to see why I enjoyed reading it so much.`
    },
    {
      title: "Pastoralia",
      author: "George Saunders",
      rating: 4,
      thanks: "Danielle",
      review: `Six black comedy stories from the master. It seems that Saunders was still finding his voice in these stories: he doesn't demonstrate quite the linguistic sureness that he has in Tenth of December and a couple of these stories didn't speak to me at all. But it's still Saunders, and "Pastoralia" and "Sea Oak" rank among his best.  and a couple of these stories didn't speak to me at all. But it's still Saunders, and "Pastoralia" and "Sea Oak" rank among his best.`
    },
    {
      title: "Capital in the Twenty-First Century",
      author: "Thomas Piketty (tr. Arthur Goldhammer)",
      rating: 4.5,
      review: `Finally, an approach to economics that interests me. Piketty throws out the conventional methodology of working up from abstracted models and instead employs a data-driven technique informed largely by historical records. In 12 chart-heavy chapters, he traces the development of the income-capital ratio and the distribution of income and capital throughout the world (primarily France and the U.S.), and argues that the economy trends naturally towards greater wealth concentration. These chapters diagnosing the state of capital are engaging and have given me a great deal to think about, but his final chapters suggesting potential solutions felt rhetorically weak, seeming almost like an afterthought. Piketty struck me as a far better economist than politician.`
    },
    {
      title: "The Watcher and Other Stories",
      author: "Italo Calvino (tr. Weaver & Colquhoun)",
      rating: 3,
      review: `"The Argentine Ant" is a great little horror tale, but I didn't care much for the other two stories. As far as early Calvino stories go, I much preferred the ones collected in Difficult Loves.`
    },
  ],
  2018: [
    {
      title: "Amusing Ourselves to Death",
      author: "Neil Postman",
      rating: 4,
      thanks: "Asali",
      review: `Postman's thesis that our ever-more-sophisticated entertainment industry is drugging society into helplessness doesn't feel particularly novel, but he argues his point masterfully. Particularly intriguing was his exploration of the importance of rational argument in the Age of Reason (e.g. his comparison of the Lincoln-Douglas debates to political debate today). Postman doesn't offer much in the way of concrete solutions, but this book is more timely than ever (and his analysis of Reagan as the "TV entertainer president" is eerily prescient...). `,
    },
    {
      title: "The Denial of Death",
      author: "Ernest Becker",
      rating: 2.5,
      review: `I had high hopes for Becker's magnum opus tracing most human behavior to our innate fear of death. And it did start off strong with its exploration of the "immortality project" concept in the first few chapters (albeit working with an outdated view of mental illness). Then, for seemingly no reason, came some bizarre chapters attempting to psychoanalyze Freud himself, and the whole thing ended on a religious note that seemed rather a cop-out.`,
    },
    {
      title: "Dictionary of the Khazars: A Lexicon Novel",
      author: "Milorad Pavi&#269; (tr. Christina Pribicevic-Zoric)",
      rating: 4.5,
      review: `This is exactly the kind of fun, eccentric modernist fiction that I love so much: a novel in dictionary form, with the entries telling a richly interlinked narrative spanning three time periods, loosely inspired by the 9th century mass conversion of the Khazar people. Magical realism with an emphasis on the "magical", it's all written in a dreamy, exuberantly fantastical voice, as though it were a fairy tale recounted by a really good storyteller.`,
    },
    {
      title: "A Wizard of Earthsea",
      author: "Ursula K. Le Guin",
      rating: 4,
      review: `I can't believe I waited so long to start reading the Earthsea books! This is Fantasy at its best: a depiction of a truly unique world (not just Middle-Ages-plus-pointy-ears), used as a backdrop for an exploration of serious themes through a humanist lens, rather than a sequence of mindless violence.`,
    },
    {
      title: "The Tombs of Atuan",
      author: "Ursula K. Le Guin",
      rating: 3.5,
      review: `(see A Wizard of Earthsea)`,
    },
    {
      title: "The Furthest Shore",
      author: "Ursula K. Le Guin",
      rating: 3.5,
      review: `(see A Wizard of Earthsea)`,
    },
    {
      title: "Pale Fire",
      author: "Vladimir Nabokov",
      rating: 4,
      review: `A bold experiment in form, Pale Fire is a novel presented as a collection of lengthy, digressive annotations to a (fictional) epic poem. It's also perhaps one of Nabokov's most autobiographical works, in its own way &#8212; it's hard not to see Nabokov himself in Kinbote, his refugee literature professor with a mysterious past. Though it's odd, then, that Nabokov makes his protagonist so unsympathetic &#8212; ultimately, a deranged stalker. Still, the rich, opinionated narrative voice makes it a joy to read.`,
    },
    {
      title: "Seven Days in the Art World",
      author: "Sarah Thornton",
      rating: 3.5,
      thanks: "Emily",
      review: `If you still have any romantic preconceptions about the role of an artist today, this is the book to dispel them. Thornton masterfully weaves together interviews and observations of all the different interlocking circles underpinning the art world, from collectors to critics, to, finally, and almost as an afterthought, the artists themselves. I certainly can't look at contemporary art the same way anymore.`,
    },
    {
      title: "The Patriots",
      author: "Sana Krasikov",
      rating: 4.5,
      review: `A contemporary equivalent to those great Russian epics of the nineteenth century. The Patriots is a sprawling novel, zigzagging back and forth between Russia and America and between past and present, as it tells the tale of one family's impossibly complex history. The narrative has its share of melodrama, but it doesn't lose its sense of universality, and I felt that I came out of it with a newfound understanding of (and appreciation for) my own family.`,
    },
    {
      title: "The Soloist",
      author: "Mark Salzman",
      rating: 2.5,
      review: `A pretty good character study of an aging musical ex-prodigy, inexplicably crossed with a ridiculous courtroom drama fearing embarrassingly dated portrayals of Zen Buddhism and a cringeworthy romance subplot.`,
    },
    {
      title: "The Piano Trio: Its History, Technique, and Repertoire",
      author: "Basil Smallman",
      rating: 3,
      review: `A comprehensive, if dry, account of the history and theory of my favorite chamber music form.`,
    },
    {
      title: "The Great Pianists",
      author: "Harold C. Schonberg",
      rating: 4,
      review: `Schonberg attempts a doubly-impossible feat &#8212; to (1) compare how the great pianoforte players, from Mozart to Gould, have approached the art of piano playing, despite a lack of clear sources, and (2) to then explain his results in a readable way &#8212; and yet not only succeeds, but also in the process presents the lives of these pianists in such an engaging way that I'd say that anyone interested in music would appreciate this book.`,
    },
    {
      title: "White Noise",
      author: "Don DeLillo",
      rating: 4,
      thanks: "Danielle",
      review: `DeLillo satirizes academia by making every character in White Noise, young and old, go through the novel as though they are an indifferent sociologist observing the world around them. The characters &#8212; a professor of "Hitler studies" and his family and colleagues &#8212; aren't very relatable figures as a result, but it does make for a hilarious, incisive work, at least until it starts to lag due to the introduction of a more "conventional" (relatively speaking) plot line in the third act.`,
    },
    {
      title: "Leviathan Wakes",
      author: "James S. A. Corey",
      rating: 3.5,
      thanks: "Jacob",
      review: `Fun, fast-paced space noir in a richly crafted near-future universe with a cynical vibe. I couldn't stop turning pages while reading it, but nonetheless I don't feel a strong urge to read the sequels.`,
    },
    {
      title: "All the Names",
      author: "Jose Saramago (tr. Margaret Jull Costa)",
      rating: 4,
      review: `Saramago does what he does best: present the smallest, most insignificant details in a character's life in such a way that they seem as weighty and important as the actions of a classical hero. At the same time, he describes bureaucratic procedure so eloquently that the bureaucracy in question (a Central Registrar of records for an unnamed city) becomes a central character in its own right. A beautiful little novel hampered only by a clumsy, abrupt ending.`,
    },
    {
      title: "Some Trick: Thirteen Stories",
      author: "Helen DeWitt",
      rating: 4,
      review: `No doubt informed by DeWitt's personal struggles, the stories contained in Some Trick are full of scathing tear-downs of artistic establishments of all sorts, be they publishers, galleries, tabloid journalists, or pompous academics. But the overarching theme is still a hopeful one: despite all the struggles and sacrifices, art will still go on, if only because artists simply can't stop doing art. Highlights: "On the Town", "The French Style of Mlle Matsumoto".`,
    },
    {
      title: "The Snail on the Slope",
      author: "Arkady & Boris Strugatsky (tr. Olena Bormashenko)",
      rating: 4,
      review: `Not my first time trying to read The Snail on the Slope, but the first time that I felt like I "got" it, no doubt thanks to Bormashenko's excellent new translation. Boris later described this novel as a meditation on the conflict between humanity's past, present, and future. It may be that, but it is also an excellent Kafkaesque tale alternating between two protagonists: one desperately trying to enter an enigmatic forest despite the objections of a faceless bureaucracy, and the other trying just as desperately to escape the first.`,
    },
    {
      title: "In Search of the Hunters and Their Tribes: Studies in the History and Culture of the Taiwan Indigenous People",
      author: "ed. David Faure",
      rating: 3.5,
      review: `There aren't many English-language books out there on Taiwanese indigenous people, but fortunately this is a good one: a fascinating, meticulously-researched collection of essays on the topic of identity among indigenous tribes in the past and present. I was especially struck by Kai Yiu Chan's essay tracing the history of plastic bead manufacturing and its effects on the social structure of the Paiwan and Rukai tribes.`,
    },
    {
      title: "Blocked: Stories From the World of Online Dating",
      author: "ed. Ally Schwed",
      rating: 3,
      review: `At their best, these short comics provide a unique, intimate look at the realities of modern dating. But too many of them just devolve to clich&#233.`,
    },
    {
      title: "Gravity's Rainbow",
      author: "Thomas Pynchon",
      rating: 4,
      thanks: "dad",
      review: `I'm torn. i want to hate Gravity's Rainbow because of the months of arduous reading that it took to get to the end of it &#8212; but how could I hate this book? It's by turns hilarious and tragic, and so dense with allusions to everything under the sun that I feel like I understood half of it, at best, even so, the half that I did understand made it worthwhile. Despite its absurdity, it's perhaps one of the most realistic fictional depictions of the military-industrial complex and the horrors of war. But I'm not sure. I'm still not done processing what I've read. `,
    },
    {
      title: "The Displaced: Refugee Writers on Refugee Lives",
      author: "ed. Viet Thanh Nguyen",
      rating: 3.5,
      thanks: "Asali",
      review: `A timely collection of powerful accounts of refugee experiences around the world, told from a wide variety of different perspectives, with tone ranging from defiant to heartbreaking. Highlights: "Guests of the Holy Roman Empress Maria Theresa" by Lev Golinkin, "God's Fate" by Aleksandar Hemon, "The Ungrateful Refugee" by Dina Nayeri.`,
    },
    {
      title: "Very Special Relativity: An Illustrated Guide",
      author: "Sander Bais",
      rating: 2.5,
      thanks: "Greg",
      review: `An interesting attempt to explain special relativity entirely using geometric reasoning with spacetime diagrams, but it didn't really work for me. Around halfway through it all started to fall apart and made me wish that I could see some equations for a change, rather than the fiendishly complicated diagrams that ensued.`,
    },
    {
      title: "Roadside Picnic Revisited",
      author: "Michael Andre-Driussi",
      rating: 1,
      review: `The author spends six essays saying absolutely nothing of substance. Good English-language analysis of the Strugatsky brothers' literature does exist (see, e.g. Istvan Csicsery-Ronay's essays), but this ain't it.`,
    },
  ],
  2019: [
    {
      title: "Fear and Loathing in the North: Jews and Muslims in Medieval Scandinavia and the Baltic Region",
      author: "ed.  Cordelia He&#223;, Jonathan Adams",
      rating: 3,
      review: `I picked this up on a whim (the Kindle edition was free) and boy, did I end up learning far more than I ever expected about Jews and Muslims in medieval Scandinavia and the Baltic region. There's some interesting scholarly work here, and it stoked my interest in the Medieval period, leading me to pick up The Cloven Viscount (Calvino), The Dwarf (Lagerkvist), and Samarkand (Malouf).`,
      fileUnder: "History / Northern Europe"
    },
    {
      title: "The Murray Bookchin Reader",
      author: "Murray Bookchin (ed. Janet Biehl)",
      rating: 3.5,
      review: `Bookchin had good ideas on communalism, social hierarchy and ecology, but his rhetorical style is dense and not always comprehensible. There were a lot of thought-provoking bits, but they were too often buried by rather abstruse writing filled with not-well-defined terminology.`,
      fileUnder: "Philosophy / Political"
    },
    {
      title: "The Cloven Viscount",
      author: "Italo Calvino (tr. Archibald Colquhoun)",
      rating: 3.5,
      review: `Not Calvino at his best, but short and sweet, reading almost like an offbeat fairy tale.`,
      fileUnder: "Fiction / Fantasy"
    },
    {
      title: "The Death and Life of Great American Cities",
      author: "Jane Jacobs",
      rating: 4.5,
      review: `Jacobs breaks down urban dynamics into axiomatic pieces and applies them masterfully in arguing for what makes a city work (short blocks, mixed uses, mixed building ages, and density) and what doesn't (modernist planning, essentially). Her analysis has some flaws (for one thing, there's no mention of gentrification) but has nonetheless aged remarkably well given its fast-moving topic. I can see why this book was such a big deal when it came out, and I can't believe it took me so long to finally read it.`,
      fileUnder: "Sociology / Urban"
    },
    {
      title: "The Dwarf",
      author: "P&#228;r Lagerkvist (tr. Alexandra Dick)",
      rating: 4,
      thanks: "dad",
      review: `Warring states, brutal betrayals, and a cunning, misanthropic dwarf. Nope, it's not Game of Thrones, but rather Lagerkvist's bleak novella exploring the nature of evil.`,
      fileUnder: "Fiction / Literary"
    },
    {
      title: "Samarkand",
      author: "Amin Maalouf (tr. Russell Harris)",
      rating: 4,
      review: `Witty and poetic, as a novel about Omar Khayyam ought to be. Maalouf ties two parallel historical threads (one in the 11th century and one in the early 20th century) together in a surprisingly natural way, skillfully juggles fact and fiction, and injects contemporary relevance through an examination of European influence in 20th century Persia.`,
      fileUnder: "Fiction / Historical"
    },
    {
      title: "The Art of Piano Playing",
      author: "Heinrich Neuhaus (tr. K. A. Leibovitch)",
      rating: 4,
      thanks: "Charles",
      review: `Neuhaus's book, ostensibly about piano performance, is really equal parts playing tips, musings about aesthetics, and anecdotes from his time as a fixture of Moscow's music scene. Don't expect a straightforward account, but there are some real gems buried under the constant (but entertaining) digressions.`,
      fileUnder: "Music / Performance"
    },
    {
      title: "House of Suns",
      author: "Alistair Reynolds",
      rating: 4,
      review: `Reynolds manages to write a story that is both thrilling and moving, despite an unimaginably far-future, high-technology setting. This is "hard" science fiction at its best.`,
      fileUnder: "Fiction / Speculative"
    },
    {
      title: "CivilWarLand in Bad Decline",
      author: "George Saunders",
      rating: 4,
      review: `Even in his first short-story collection, Saunders shows his unique, darkly satirical voice, but
      these stories in particular do come off feeling somewhat repetitive, and setting them all in bizarre theme parks doesn't help. Highlights: "CivilWarLand in Bad Decline", "Offloading for Mrs. Schwartz", and the remarkable Afterword in the new edition.`,
      fileUnder: "Fiction / Satire / Short stories"
    },
    {
      title: "My Boyfriend is a Bear",
      author: "Pamela Ribon and Cat Farris",
      rating: 3,
      review: `A cute, quick read.`,
      fileUnder: "Graphic novels / Humor"
    },
    {
      title: "Killing Commendatore",
      author: "Haruki Murakami (tr. Philip Gabriel and Ted Goossen)",
      rating: 3,
      review: `I wanted to like this book, and the painting scenes are some of the best depictions of the artistic process I've read in fiction. In the end, though, it felt like a slog, and had none of the payoff that I was hoping for &#8212; nothing seemed to get resolved and not much was explained. Even more so than 1Q84, this felt like a knockoff Murakami novel, rather than the real deal.`,
      fileUnder: "Fiction / Literary"
    },
    {
      title: "Energy and Civilization",
      author: "Vaclav Smil",
      rating: 3.5,
      review: `The first half of the book (prehistoric agriculture until the fossil fuels era) is fantastic and informed a lot about how I think about human prehistory. Everything after that is a tedious slog as Smil seemingly tries to cram in every single invention and development of the Industrial Revolution into his book for the sake of comprehensiveness, without much payoff at the end. I would stop after Chapter 4.`,
      fileUnder: "History / Energy"
    },
    {
      title: "Evicted: Poverty and Profit in the American City",
      author: "Matthew Desmond",
      rating: 5,
      review: `Even if this were a work of fiction, it would get high marks for its gritty, gripping portrayal of impoverished families struggling to survive in inner-city Milwaukee. The fact that this is all documentary nonfiction makes it all the more remarkable. Desmond doesn't offer much in the way of solutions, but he viscerally depicts the problem of extreme urban poverty. If every policymaker had to read this book, maybe things could get better.`,
      fileUnder: "Sociology / Urban"
    },
    {
      title: "A Gentleman in Moscow",
      author: "Amor Towles",
      rating: 3.5,
      thanks: "mom",
      review: `A clever premise, hampered by a charming but ultimately dull protagonist and a generally one-dimensional cast (with some notable exceptions). The novel is jam-packed with references to Russian literature, but I didn't get the sense that Towles actually succeeded in understanding the "Russian mindset", so to speak. If you're in the mood to read a contemporary multi-generational epic set largely in the Soviet Union, try Sana Krasikov's fantastic debut novel The Patriots instead.`,
      fileUnder: "Fiction / Historical"
    },
    {
      title: "The Mysteries of Pittsburgh",
      author: "Michael Chabon",
      rating: 3.5,
      thanks: "Asali",
      review: `A modern coming-of-age story that's by turns poignant and hilarious. It definitely has its moments, but the plot feels uneven, with the fantastical gangster subplot seeming particularly out of place. I prefer Chabon's later works, but it's interesting to see how he's grown as a writer.`,
      fileUnder: "Fiction / Contemporary"
    },
    {
      title: "The Conquest of Bread",
      author: "Piotr Kropotkin (tr. Piotr Kropotkin)",
      rating: 4,
      review: `Kropotkin turns out to be much more straightforward and unpretentious than I'd expected. The Conquest of Bread convincingly lays out an alternative vision for society, while still maintaining nuance and not getting bogged down in ideology (I particularly appreciated the chapter on the necessity of luxuries, such as pianos, even in an anarchist society).`,
      fileUnder: "Philosophy / Political"
    },
    {
      title: "The Goldfinch",
      author: "Donna Tartt",
      rating: 4.5,
      thanks: "Asali",
      review: `One of those books you just can't put down &#8212; I think I read the last two parts in one fell swoop. A lot of critics seem to have accused The Goldfinch of being melodramatic, and maybe it is, but what is life without some melodrama? (Admittedly, I came into it already a Donna Tartt fan &#8212; The Secret History is a favorite.) There's some wonderful portrayals of grief and obsession, but most of all, I just appreciate a story about someone progressively digging themselves into an unthinkably deep hole, and still, against all odds, climbing most of the way out.`,
      fileUnder: "Fiction / Literary"
    },
    {
      title: "The Classical Style",
      author: "Charles Rosen",
      rating: 4,
      review: `The Classical Style takes something I thought I understood (sonata form) and shows it to be both far more complicated and more intuitive than I'd thought. This book was slow going (it took me a few months on-and-off to get through it due to all the musical examples) but completely changed how I listen to classical music, particularly that of Haydn and Mozart. Worth it for anyone looking to learn more about the nuts and bolts of classical music.`,
      fileUnder: "Music / Analysis"
    },
    {
      title: "Childhood's End",
      author: "Arthur C. Clarke",
      rating: 3,
      review: `An interesting subversion of the alien-invasion trope, but the plot is all over the place, jumping from sci-fi to crime drama to utopian exposition to a bizarre ESP subplot that Clarke himself later regretted including. The Strugatsky brothers delivered on this premise better in their works, especially their 1987 novel The Ugly Swans.`,
      fileUnder: "Fiction / Speculative"
    },
  ],
  2020: [
    {
      title: "The Mathematician's Shiva",
      author: "Stuart Rojstaczer",
      rating: 2.5,
    },
    {
      title: "Utopia Drive",
      author: "Eric Reese",
      rating: 4.5,
    },
    {
      title: "The Last Samurai",
      author: "Helen DeWitt",
      rating: 4.5,
    },
    {
      title: "The Shock Doctrine",
      author: "Naomi Klein",
      rating: 4,
      thanks: "Mel"
    },
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel Garc&#237;a M&#225;rquez (tr. Gregory Rabassa)",
      rating: 5,
      thanks: "Asali"
    },
    {
      title: "The Tall Building Artistically Reconsidered",
      author: "Ada Louise Huxtable",
      rating: 3,
    },
    {
      title: "Trysting",
      author: "Emmanuelle Pagano (tr. Jennifer Higgins and Sophie Lewis)",
      rating: 3.5,
    },
    {
      title: "So You Want to Talk About Race",
      author: "Ijeoma Oluo",
      rating: 4,
    },
    {
      title: "The Color of Law: A Forgotten History of How Our Government Segregated America",
      author: "Richard Rothstein",
      rating: 4,
    },
    {
      title: "Stories of Your Life and Others",
      author: "Ted Chiang",
      rating: 4,
    },
    {
      title: "Exhalation",
      author: "Ted Chiang",
      rating: 4.5,
    },
    {
      title: "Give them an Argument: Logic for the Left",
      author: "Ben Burgis",
      rating: 2,
    },
    {
      title: "Piranesi",
      author: "Suzanna Clarke",
      rating: 4.5,
    },
    {
      title: "Lingo: Around Europe in Sixty Languages",
      author: "Gaston Dorren (tr. Alison Edwards)",
      rating: 3,
    },
    {
      title: "Lame Fate / Ugly Swans",
      author: "Arkadi & Boris Strugatsky (tr. Maya Vinokour)",
      rating: 4,
    },
    {
      title: "Monday Starts on Saturday",
      author: "Arkadi & Boris Strugatsky (new tr. by Andrew Bromfield)",
      rating: 4,
    },
    {
      title: "October: The Story of the Russian Revolution",
      author: "China Mieville",
      rating: 4,
    },
  ],
  2021: [
    {
      title: "Bay Area Cocktails: A History of Culture, Community and Craft",
      author: "Shanna Farrell",
      rating: 2.5,
      thanks: "Asali",
      review: `Farrell has certainly done her research, conducting dozens of interviews over several years to put together this book. And it's full of interesting tidbits about the various characters behind the Bay Area's cocktail renaissance. What feels missing is a discussion of just what makes the Bay Area special (if anything!) - most of the trends that the author traces in cocktail history have little to do with this particular region, and as a result the book feels aimless at times.`,
      fileUnder: "Food & Drink / Cocktails / History"
    },
    {
      title: "A History of the Peoples of Siberia: Russia's North Asian Colony 1581-1990",
      author: "James Forsyth",
      rating: 4.5,
      review: `Ah, just the book I needed to feed my obsession with Siberia and The Far East. In fact, it's so comprehensive and well-researched that I was surprised to even find a book like this in English. Forsyth's writing can be dry at times but he admirably compiles and presents an overwhelming wealth of information about the indigenous people of North Asia, from the Khanty and Mansi along the Ob river all the way to the Chukchi and Itelmens of the northeast edge. He presents some cultural background, but for the most part this is a history of Russian exploitation, with roughly the first half of the book following the tsarist colonial project and the second half of the book follows the varying rises and falls (but mostly the latter) in the fortunes of the Siberian peoples through the Soviet era. It's a shame that the story ends in 1990 and the author never put out a new edition, because I haven't yet been able to find a good follow-up read on contemporary Siberian indigenous history. This is a fascinating and tragic account of a group of peoples that most Western books about Russia barely even mention.`,
      fileUnder: "History / North Asia"
    },
    {
      title: "Manhattan Beach",
      author: "Jennifer Egan",
      rating: 3.5,
      thanks: "Asali",
      review: `A beautifully-written novel with a lot of passages that I really liked, that unfortunately seemed to sputter out partway through, with too much time spent following a gangster subplot that just felt like one clich&#233 after another. Egan spent over a decade putting Manhattan Beach together, and her meticulous attention to period detail is clear, but in the process the novel ends up not having the same kind of wild spark that A Visit From the Goon Squad had.`,
      fileUnder: "Fiction / Historical"
    },
    {
      title: "A Swim in a Pond in the Rain: In Which Four Russians Give a Master Class on Writing, Reading, and Life",
      author: "George Saunders",
      rating: 4,
      thanks: "a lot of people recommended this to me!",
      review: `The stories are, of course, a pleasure to read, especially Tolstoy's "Master and Man", Gogol's "The Nose", Turgenev's "The Singers" … But what I didn't expect was just how illuminating Saunders's commentary is to each story, and how much I learned about what goes into crafting a good short story. I'm not a writer, but a lot of the exercises and approaches here apply just as well to critically reading and enjoying fiction, and I came out of this book with a deeper appreciation of Russian literature and the short story in general.`,
      fileUnder: "Fiction / Literary / Short stories and Literary Criticism"
    },
    {
      title: "We Should All Be Feminists",
      author: "Chimamanda Ngozi Adichie",
      rating: 3.5,
      review: `Adichie makes her point clearly and elegantly. It's a very short read, but perhaps is just the length it needs to be.`,
      fileUnder: "Essays"
    },
    {
      title: "Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy",
      author: "Cathy O'Neil",
      rating: 3.5,
      review: `A well-written and timely analysis of the dangers of the over-reliance on ML to do things like score r&#233sum&#233s and process loan applications. I feel like there's not too much here that people in the ML field haven't been warning about for years, but it's important that this issue gets broader attention, and this book does a great job of clearly explaining the issue to a wide audience.`,
      fileUnder: "Technology / Social Aspects"
    },
    {
      title: "Seeing Like a State: How Certain Schemes to Improve the Human Condition Have Failed",
      author: "James Scott",
      rating: 4.5,
      thanks: "JP",
      review: `Few books have influenced my thinking as much as Seeing Like a State has. Scott's central thesis is that a diverse range of state activities over the past few centuries can be seen through the lens of legibility - a state, when faced with a complicated, local, difficult-to-understand situation will attempt to standardize and homogenize, sacrificing local knowledge and diversity for the sake of simplification. The introductory example here is 18th century Prussian "scientific forestry", where natural forests, which formed complete ecosystems but whose timber output was difficult to quantify and predict, were replaced by rows upon rows of identical trees, which were more legible in the sense of being easier to reason about as a system, but of course were much less resilient against weather and pests than the natural, "illegible" forest system that they replaced. From the natural realm, Scott continues to a variety of examples of state simplification of human systems, from Le Corbusier's high-modernist city planning to Soviet collectivization to Tanzanian "villagization" in the 1960s and 70s, finally closing with a meditation on his idea of "m&#275;tis", the kind of crucial, hyper-specific local knowledge that gets lost during these instances of standardization. Overall, this was an engaging and very illuminating read, marred for me only by a chapter contrasting Lenin and Luxembourg's visions of revolution that seemed particularly weak / out-of-place here.`,
      fileUnder: "Political Science or Anthropology"
    },
    {
      title: "Gem of the Lost Coast: A Narrative History of Shelter Cove",
      author: "Mario Machi",
      rating: 1.5,
      review: `A passably-written collection of local history of the Shelter Cove area, written by an active participant in that history.`,
      fileUnder: "History / California / Local"
    },
    {
      title: "Flutes of Fire: Essays on California Indian Languages (new edition)",
      author: "Leanne Hinton",
      rating: 4,
      review: `(Something of a re-read &#8212; I've read part of it before for a class in undergrad, but never read it cover-to-cover before.) This book feels like something of a rarity &#8212; a broad-strokes look at indigenous languages of California that's accessible to the layperson while still being linguistically rigorous and not "dumbing down" the subject matter. And it's simply a delight to read, as you can feel Hinton's sense of wonder about the languages and language features that she's writing about. This is the book that originally kindled my interest in linguistics when I read part of it in an introductory college course, and reading it now brings that feeling back. The last two sections, "Language and Dominion" and "Keeping the Languages Alive", are ones that I don't think I've read before and they feel particularly important now, though it's sad to think how much has likely been lost since this book was first published in 1994.`,
      fileUnder: "Linguistics / Areal / North America"
    },
    {
      title: "The Chess Garden: Or, The Twilight Letters of Gustav Uyterhoeven",
      author: "Brooks Hansen",
      rating: 3.5,
      thanks: "Adam Browning",
      review: `This might not be my favorite novel I read this year, but it is certainly one that will stick in my memory for a long time. I don't even really know how to describe it &#8212; a colorful biography of the (fictional) Dr. Uyterhoeven, interspersed with his stories of a journey through a land populated by anthropomorphic board game pieces, which in turn form allegories about … the conflict between rationalism and "vitalism"? This is a profoundly ambitious novel that comes very close to something special. It does end up feeling tedious near the middle, and the ending was a little too overtly "spiritual" for my taste. But nonetheless, I have no regrets about opening up this book.`,
      fileUnder: "Fiction / Experimental"
    },
    {
      title: "Reality and Other Stories",
      author: "John Lancaster",
      rating: 2.5,
      review: `"Old-fashioned ghost stories about technology" is a premise that I very much wanted to like, but unfortunately Lancaster fails to deliver with most of these. Most of them feel a little too clever, as though they're written by someone who wants to write "genre fiction" but is feeling just a bit too smug about it. The best story in the collection, "Reality", is also the one that is the furthest away from that overall premise.`,
      fileUnder: "Fiction / Speculative / Short stories"
    },
    {
      title: "Linguistic Diversity in Space and Time",
      author: "Johanna Nichols",
      rating: 4,
      review: `There's a lot going on here, even for a reader like me with only an undergraduate grasp of linguistics. Nichols (1) assesses a set of especially "stable" language features for nearly 200 languages covering most of the world's language families and isolates, building probably the largest database of language typology of its time; (2) presents a novel way to trace the stability of each of these features over space and time; and (3) from there, develops a theory of language diversity that both suggests answers to long-standing puzzles (e.g. Q: Why are there so many more distinct language families in the Americas than in the "Old World"? A: The typological properties common in American languages are exactly the ones that cause the linguistic data necessary for the comparative method to "erode" away more quickly.) and raises new ones (e.g. Nichols's data suggests that the Americas were initially populated largely by people coming from the Australian/Papuan direction, which certainly isn't a mainstream theory). This is a truly monumental project, that easily could have ended up as multiple important books, and it is wild to see so much ambition and insight packed into a single, fairly slim, volume.`,
      fileUnder: "Linguistics / Typology"
    },
    {
      title: "East of Eden",
      author: "John Steinbeck",
      rating: 4.5,
      review: `It's a classic for a reason. The writing is beautiful (Steinbeck referred to it as his "first novel" after he finished it, and it really does show an incredible maturity of style), but at the same time it feels like it's missing some of the humanism, the generalized love and compassion for humanity, that is so present in his earlier novels like The Grapes of Wrath, Cannery Row, etc. The political interjections feel out-of-place and, often, out-of-touch, as does a shockingly racist passage near the very beginning. The Biblical allegory is about as heavy-handed as one could expect from the title. One major character is so cartoonishly evil that it's difficult to feel invested in her storyline. Structurally, it's all over the place, with some particularly meandering plot elements, and a narrative voice that switches between third-person and first-person when you least expect it. And yet, somehow it just works. I didn't know quite how I felt about East of Eden until the very end, which was one of my most emotional reading experiences in recent memory.`,
      fileUnder: "Fiction / Literary"
    },
    {
      title: "Native California Hero's [sic] of the Miwok Confederation: Teleguac, Estanislas and Yolosko",
      author: "Guy Nixon (Redcorn)",
      rating: 1.5,
      review: `I was hoping to read some interesting and previously undocumented bits of Miwok history taken from oral interviews conducted by the author. Unfortunately, the end result is so poorly written/edited as to be largely unreadable. The opening chapters, on the ecological aspects of Native Californians' first interactions with settlers, raise some interesting questions but are difficult to take at face value.`,
      fileUnder: "History / California / Native American"
    },
    {
      title: "Bullshit Jobs: A Theory",
      author: "David Graeber",
      rating: 4,
      review: `At one point, Graeber describes the job of a cultural anthropologist to be (paraphrasing) digging deeply into cultural assumptions that are taken at face value, and Bullshit Jobs does just that. It examines a concept that doesn't even feel worthy of writing a book about ("many jobs feel boring and meaningless" is hardly news!), and uses it as a lens to examine the bureaucratization of the economy, the history of popular perception of capitalism, and some surprising holdovers from the age of feudalism that seem to reassert themselves in today's "bullshit" jobs. And unlike many such books that present series social issues without presenting much in the way of a remedy, Graeber ends with a decent argument in favor of universal basic income as at least a partial solution here.`,
      fileUnder: "Anthropology / Cultural"
    },
    {
      title: "Dune [re-read]",
      author: "Frank Herbert",
      rating: 4,
      review: `(Technically a re-read, but I haven't read it since I was in high school, so I'll count it.) Re-reading Dune (for the obvious reasons) was an interesting experience because, while I remembered the overall plot outline, one thing that slipped my memory was just how weird of a book Dune is, and I mean that in the best possible way. Even compared to its New Wave science fiction contemporaries, Dune is really its own thing, spending seemingly more time speculating about desert ecology, religion, and the spread of ideas than on, you know, the action itself, much of which ends up taking place "off-screen". The plot itself feels less engaging in the second half of the book, but Herbert can be forgiven for this because everything else is still so interesting.`,
      fileUnder: "Fiction / Speculative"
    }
  ],
  2022: [
    {
      title: "Imbibe! [revised edition]",
      author: "David Wondrich",
      rating: 4,
      review: `Wondrich's meticulous research and engaging writing take what could be a dull subject &#8212; 19th-century cocktail recipes &#8212; and make it immensely satifying to read about. (Note: I've started a project to recreate each drink in the book, as close to the original recipe as possible, though I haven't gotten very far yet: https://instagram.com/aleximbibes )`
    },
    {
      title: "Elements of Clojure",
      author: "Zachary Tellman",
      rating: 3,
      review: `Unfortunately the more Clojure-heavy parts of the book were lost on me (it's been a while), but I particularly enjoyed the Names chapter, a deep and philosophically interesting exploration of naming in software.`
    },
    {
      title: "Wingbearer",
      author: "Marjorie Liu and Teny Issakhanian",
      rating: 3,
    },
    {
      title: "Debt: The First 5000 Years",
      author: "David Graeber",
      rating: 4,
      review: `I'm not sure if I am fully convinced of Graeber's theory of debt preceding money and the constant realignment between the two, but this is a fascinating read regardless, with the earliest sections, on social currencies and "everyday communism", being the most thought-provoking.`
    },
    {
      title: "Why Fish Don't Exist",
      author: "Lulu Miller",
      rating: 3.5,
      review: `Without spoiling too much, I will say that this is a brilliantly written account of one man's quixotic scientific journey and the lengths that he would go to to achieve his vision, interspersed with a touching personal memoir.`
    },
      {
      title: "The Truth and Other Stories",
      author: "Stanislaw Lem",
      rating: 3,
      review: `This collection of previously-untranslated stories by Lem was hit-and-miss. Highlights: "Invasion from Aldebaran", "The Friend", "The Hammer", "One Hundred and Thirty-Seven Seconds" (the latter particular timely in the age of GPT-3…).`
    },
    {
      title: "The Shaman's Coat",
      author: "Anna Reid",
      rating: 4,
      review: `I'm a sucker for all things North Asia, so how could I resist Reid's account of her travels in early 2000s Siberia in search of extant shamanic customs? The history aspect of it is definitely no match for Forsyth's magisterial A History of the Peoples of Siberia, but the personal travelogue is an engaging read.`
    },
    {
      title: "Here I Am",
      author: "Jonathan Safran Foer",
      rating: 3.5,
      review: `Safran Foer's trademark wit is still there, but it just didn't hit me emotionally the way his first two novels did.`
    },
    {
      title: "Independent People",
      author: "Halld&#243;r Laxness (tr. Brad Leithauser)",
      rating: 4.5,
      review: `Perhaps the whole of the human experience is contained within this epic about a small-time farmer's rise and fall, brimming with wit and tragedy.`
    },
    {
      title: "Embassytown",
      author: "China Mieville",
      rating: 4.5,
      review: `The perfect novel about language and language contact, though it's so much more than just that &#8212; one of the most inventive pieces of sci-fi I've ever read.`
    },
    {
      title: "The Winter Queen",
      author: "Boris Akunin",
      rating: 3,
      review: `A page-turner of a historical mystery-thriller that somehow just doesn't feel satisfying at the end.`
    },
    {
      title: "How to Do Nothing",
      author: "Jenny Odell",
      rating: 4,
      review: `The anti-self-help self-help book, How to Do Nothing is a manifesto for regaining attention in an age of addictive technology, and manages to be both beautifully written and full of actionable ideas.`
    },
    {
      title: "The Chukchi Bible",
      author: "Rytg&#279;v (Yuri Rytkheu) (tr. Ilona Yazhbin Chavasse)",
      rating: 4,
      review: `Part mythology, part poetic ethnography, part adventure story, part family lore, The Chukchi Bible is a mysterious and beautifully written ode to a fading culture.`
    },
    {
      title: "Sippin' Safari [10th anniversary edition]",
      author: "Jeff 'Beachbum' Berry",
      rating: 3.5,
      review: `What Wondrich does for classic American cocktails, Berry does for tiki. Sippin' Safari is a fun romp through the world of tropical drinks, but I found the structure of it to be a little unfocused, lacking a clear through-line.`
    },
    {
      title: "Telluria",
      author: "Vladimir Sorokin (tr. Max Lawton)",
      rating: 3.5,
      review: `A kaleidoscopic collection of 50 linked micro-stories, all set in a bizarre future of feudal states, human-animal hybrids and super-drugs. I have to give Sorokin credit for his profoundly imaginative world-building, but each chapter being told from a completely new perspective robs it of any sense of real narrative progression.`
    },
    {
      title: "The Routledge Handbook of Language Revitalization",
      author: "ed. Leanne Hinton, Leena Huss and Gerald Roche",
      rating: 3,
      review: `What it says on the tin. Part 1 is mostly theoretical essays about topics in language revitalization. Part 2, which I personally found more interestings, consists of myriad case studies from around the world.`
    },
    {
      title: "The Dispossessed",
      author: "Ursula K. Le Guin",
      rating: 4,
      review: `I don't know why it's taken me this long to read this classic of science fiction, with an extraordinary portrayal of an anarchist "ambiguous utopia". I just wish the whole thing didn't unravel with an unsatisfying deus ex machina ending.`
    },
    {
      title: "A Sociolinguistic History of Scotland",
      author: "Robert McColl Millar",
      rating: 3.5,
      review: `An expertly written work of sociolinguistics that crams centuries of history of usage of Scotland's two autochtonous languages &#8212; Scots and Gaelic &#8212; into a slender tome, ultimately striking a critical yet hopeful tone about the prospect of preserving Scotland's linguistic heritage.`
    },
    {
      title: "Language and Symbolic Systems",
      author: "Yuen Ren Chao",
      rating: 3.5,
      review: `Why read a 60s linguistics textbook? In part because Chao, a pioneer of Chinese linguistics, writes in beautifully fluid and conversational way, and in part because this book reflects his own interests more than anything else, and so features incredibly forward-thinking chapters on sociolinguistics, information theory, and even language technology.`
    },
  ],
  2023: [
    {
      title: "The Edge of the World: A Cultural History of the North Sea and the Transformation of Europe",
      author: "Michael Pye",
      rating: 3.5,
      review: `A clever and enjoyable work of pop history about the cultural influence of North Sea civilizations (in particular, Vikings, Frisians, and the Hansa) on Europe from the 7th through the 17th centuries, countering the traditional European narrative of cultural innovations largely stemming from around the Mediterranean. Pye has done his research, and the primary sources he cites provide remarkable glimpses of medieval lives not too different from our own, neatly organized into chapters covering topics ranging from the book trade to "love and capital" to Medieval fashion (an unexpectedly delightful chapter). My one major complaint is that the book often tries to provide simple causal explanations for complex phenomena (I call this the "Jared Diamond style" of pop history). I get why Poe does this &#8212; it certainly makes for a "neater" narrative &#8212; but it feels insincere and takes away from an otherwise excellent read.`
    },
    {
      title: "The Remains of the Day",
      author: "Kazuo Ishiguro",
      rating: 4.5,
      review: `An aging butler taking a road trip in 1950s England seems like a thin premise for a novel, and yet Ishiguro makes it into a profoundly moving work of literature. The bulk of the story is told through the narrator's recollections as he drives through the English countryside. He begins the journey fully committed to a particular ideal of being a "dignified" butler, which he expounds on in great detail. But by the end of it, cracks have appeared in his belief system &#8212; we see just how much damage his unwavering commitment to his ideals has caused to his personal life, just as we learn more about the shortcomings of the lord that all of this butlering was done for. At its heart, this is a novel about the ideas we build our lives around, and about what happens if these towers of ideas that we've built up no longer support us.`
    },
    {
      title: "Understanding Comics",
      author: "Scott McCloud",
      rating: 4,
      review: `I'll admit that I haven't explored the medium of graphic novels a huge amount in my life, but maybe this will change now that I've read <i>Understanding Comics</i>. It illustrates the artistic and philosophical principles behind sequential art (iconography, time and motion, the idea of closure, etc), all in the form of a comic. It then goes beyond the mechanics of comics into deeper ideas about the creative process itself. I think everyone involved in any sort of artistic field, irrespective of one's interest in comics, would benefit from reading <i>Understanding Comics</i>.`
    },
    {
      title: "Exercises in Style",
      author: "Raymond Queneau (tr Barbara Wright)",
      rating: 4,
      review: `Queneau's "exercises" themselves &#8212; the same short story retold in a hundred different styles, ranging from Haiku to "Mathematical" &#8212; and Wright's classic translation are both an absolute tour-de-force of language. I don't usually go for this kind of modernist literature, but I couldn't help smiling at the cleverness of it all. I read a modern edition that additionally compiles Queneau's previously unpublished exercises and includes new exercises from contemporary writers in such styles as "Beat" and "Cyberpunk." For the most part, I could take or leave this added material.`
    },
    {
      title: "Users",
      author: "Colin Winnette",
      rating: 2.5,
      review: `I picked up <i>Users</i> after attending a reading of one chapter of the novel. Unfortunately, the passage I heard was one of the liveliest, best-written parts, and the rest of the book was somewhat of a letdown after that. The premise is timely (it's all about the unintended consequences of technology), but most of the characters felt more like sketches than fully fleshed-out people, and I was not entirely convinced by the direction the plot went in. I'm still waiting for a great satire of the modern tech industry, but this wasn't it for me.`
    },
    {
      title: "The Ladies of Grace Adieu and Other Stories",
      author: "Susanna Clarke",
      rating: 4,
      review: `<i>The Ladies of Grace Adieu</i> is a collection of stories written in the style of 19th-century fairy tales, set in the world of Clarke's <i>Jonathan Strange & Mr. Norrell</i>. The stories are beautifully crafted in Clarke's signature style, with a deceptively light tone hiding heavy themes. All in all, it was a delightful read, and I just wish it wasn't so short. (I also definitely found myself missing the labyrinthine footnotes of <i>Jonathan Strange & Mr. Norrell</i>.)
      <br><br>
      I particularly liked "Mrs Mabb," "Mr Simonelli," and "Tom Brightwind."`
    },
    {
      title: "The Library of the Villa dei Papiri at Herculaneum",
      author: "David Sider",
      rating: 2.5,
      review: `A comprehensive, if bone-dry, examination of the history and contents of the charred papyri excavated from the Villa dei Papiri that I read while following the "Vesuvius Challenge." My biggest takeaway was that far more information has already been decoded from the papyri using traditional methods than I'd expected.`
    },
    {
      title: "Red Plenty",
      author: "Francis Spufford",
      rating: 4,
      review: `<i>Red Plenty</i> is a gripping historical novel about the management of the Soviet economy in the 1960s. No, I'm not kidding. Except it's not exactly a novel &#8212; there's a mix of fictional characters and real historical figures, with the latter's dialogue largely lifted directly from primary sources. The narrative chapters are further interspersed with meticulously researched nonfiction chapters on Soviet economics. It's not an easy topic to make into an engaging narrative, but Spufford achieves the impossible here. He was also clearly passionate about getting all the details right, going so far as to commission his own English translations of primary sources when he realized his lack of Russian knowledge was a barrier. (Even Spufford's bibliographical footnotes are so inviting and enthusiastic that now I have a dozen more books I want to read about &#8212; who'd have guessed &#8212; science and economics in the Soviet Union.) Without a doubt, this is the best work of fiction I've read about the Soviet Union by a Western writer (sorry, Amor Towles).`
    },
    {
      title: "Venice Observed",
      author: "Mary McCarthy",
      rating: 4,
      review: `An absolute masterpiece of travel writing by one of the great essayists of the 20th century. <i>Venice Observed</i>, written over the course of a year that McCarthy spent in Venice in the 1950s, humanizes and contextualizes a city that can too often seem like a clich&#233. It certainly changed my mind about Venice &#8212; after all, it may be a "tourist trap," but it's an honest one, having essentially invented the concept of the "tourist trap" in the 17th century. The first half of the book, focusing more on the city's history, was just one fascinating insight after another. A highlight for me was the essay on how each of Venice's principal islands essentially functions as a microcosm of Venice in a different time period. The book's second half veered more into art history, which was still interesting but didn't grip me as much.`
    },
    {
      title: "Zeno's Conscience",
      author: "Italo Svevo (tr. Peter Palmieri)",
      rating: 4,
      review: `<i>Zeno's Conscience</i> is a classic of modernist literature that seems to have lost some of its popularity &#8212; I'll admit that I only picked it up because I was in Trieste, where Italo Svevo is something of a local hero. (And I'm glad I did!) The novel is more of a collection of stories, all told through the same framing device of a patient's diary written for his psychotherapist (a pretty novel concept for 1927!). The patient in question, the titular Zeno, is a mess, but a highly self-aware mess, and he is constantly rationalizing his various compulsions and anxieties, such as his almost daily attempts to quit smoking just because "I believe the taste of a cigarette is more intense when it's your last." Zeno, as a character who is both profoundly flawed and tremendously observant, provides a perfect foil through which Svevo can satirize early-20th century Triestine society, as we see Zeno's misadventures in the worlds of romance and business. In the end, <i>"La vita non &#232; n&#233 brutta n&#233 bella, ma &#232; originale!"</i> ("Life is neither ugly nor beautiful, but it's original!")`
    },
    {
      title: "Outwitting History: The Amazing Adventures of a Man Who Rescued a Million Yiddish Books",
      author: "Aaron Lansky",
      rating: 3,
      review: `<i>Outwitting History</i> is an enjoyable and fast-paced read about Lansky's monumental efforts to preserve Yiddish literature starting in the 1970s. Still, I couldn't shake the feeling that something was not quite genuine about it. I'm sure that Lansky's account is generally truthful, but some of the anecdotes had such clich&#233d, Hollywood-y dialogue (especially in the later sections) that it made me question how many of these events really happened the way the book describes them. By the end, it felt a bit like an advertisement for the National Yiddish Book Center (don't get me wrong, though &#8212; I appreciate their work, and they can certainly use such an advertisement).`
    },
    {
      title: "Revitalizing Endangered Languages: A Practical Guide",
      author: "ed. Justyna Olko, Julia Sallabank",
      rating: 3.5,
      review: `<i>Revitalizing Endangered Languages</i> is a unique and much-needed addition to the literature on language revitalization &#8212; a volume that combines academic rigor with practical advice, sprinkled throughout with real-life examples from revitalization projects worldwide. The scope is comprehensive, covering everything from sociolinguistics to grant writing. Particularly interesting to me were the sections in the beginning on planning revitalization projects and setting goals &#8212; much of the existing literature seems to come with pre-existing notions of what the goals of revitalization are, and it was interesting to see this book interrogate these notions. I will say, though, that I was not very impressed by the chapter on revitalization technology, which seemed hopelessly old-fashioned.`
    },
    {
      title: "The Internet Con: How to Seize the Means of Computation",
      author: "Cory Doctorow",
      rating: 3,
      review: `<i>The Internet Con</i> is a long essay about the virtues of interoperability as a way to curb the power of the tech industry. It was well-written and well-argued, with some clever anecdotes, but it didn't leave much of an impression overall.`
    },
    {
      title: "A Very Old Man: Stories",
      author: "Italo Svevo (tr. Frederika Randall)",
      rating: 3.5,
      review: `A collection of Svevo's last writings, mostly prose fragments that continue the story of <i>Zeno's Conscience</i>. I'm grateful that these writings have been published and that readers have one last opportunity to enter Svevo's Trieste. It's still remarkably witty writing, and Svevo still has his way of making you root for Zeno despite his obvious flaws, but the fragmentary nature of these pieces and the open plot contradictions between them (clearly, Svevo was trying a few different approaches, and at the time of his death, hadn't fully decided on which path to take) make it a less satisfying read than <i>Zeno's Conscience</i>.`
    },
    {
      title: "The Island of the Day Before",
      author: "Umberto Eco (tr. William Weaver)",
      rating: 3,
      review: `As someone who loved <i>The Name of the Rose</i> and <i>Baudolino</i>, reading <i>The Island of the Day Before</i> was my biggest literary disappointment of the year. Eco set out to write a novel where the universe functions according to 17th-century conceptions of science, and this aspect he accomplishes remarkably well. There's no denying that it's a thought-provoking book. The problem is that this may have come at the expense of some of the novel itself. Most of it (spoiler alert) takes place with the main character all alone, and long stretches of the story occur entirely in his head. We get some of the intrigue of <i>The Name of the Rose</i> and some of the colorful exploration of <i>Baudolino</i>, but not nearly enough of either to support the length of this novel. By the end, reading it felt like a chore.`
    },
    {
      title: "The Final Solution: A Novel of Detection",
      author: "Michael Chabon",
      rating: 2.5,
      review: `The premise &#8212; a Sherlock Holmes mystery set during the Holocaust &#8212; was intriguing enough to pick it up, but, though elegantly written, it felt far too short and lacking in substance, and certainly not much of a detective story at all. A shame, as I'd really enjoyed Chabon's other novella, <i>Gentlemen of the Road</i>.`
    },
    {
      title: "Jewish Languages from A to Z",
      author: "Aaron Rubin and Lily Kahn",
      rating: 3.5,
      review: `I was heartened to see a comprehensive look into Jewish languages &#8212; delving far deeper than just Hebrew and Yiddish &#8212; aimed at a lay audience. As far as I can tell, this is a condensed and simplified summary of Rubin and Kahn's earlier edited volume, the <i>Brill Handbook of Jewish Languages</i>, comprising longer passages about languages with a significant attested history (Ladino, Judeo-Arabic, etc.) and shorter sections about poorly-attested Jewish languages. Every chapter illustrates some primary sources, often providing a fascinating look into historical Jewish culture in areas as far removed as South India and the island of Cura&#231;ao. Unfortunately, I found some linguistic details here to be simplified to the point of being sloppy and sometimes misleading. I was particularly confused by how the authors conflated distinctive Jewish spoken languages (e.g., Judeo-Tat, the various Judeo-Aramaic varieties, etc.) with languages that just happened to have been written once in Hebrew (e.g., "Judeo-Maltese"), leading to (in my eyes) a far too broad definition of "Jewish languages."`
    },
    {
      title: "Smuggler's Cove: Exotic Cocktails, Rum, and the Cult of Tiki",
      author: "Martin and Rebecca Cate",
      rating: 3.5,
      review: `About as well-written and nicely laid-out a book as can be made about tropical cocktails and the culture around them. In contrast to Jeff Berry's <i>Sippin' Safari</i>, which is an excellent work of largely primary research but a little confusingly laid out, <i>Smuggler's Cove</i> is a very readable synthesis of existing source materials on the history and theory of tropical cocktails and of the Cates' personal experiences in running an acclaimed tiki bar. The recipes are, of course, top-notch.`
    },
  ],
}

/*
    {
      title: ,
      author: ,
      rating: ,
      review: ``,
    },
*/