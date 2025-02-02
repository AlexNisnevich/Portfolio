
// Originally created by processing http://alex.nisnevich.com/blog/atom.xml
var blogPosts = [
	{year: 2025, month: 1, name: 'Reading List - 2024', url: 'https://alex.nisnevich.com/blog/2025/02/02/reading_list_2024.html'},
	{year: 2024, month: 6, name: 'A Belated Wordbots Dev Diary / Retrospective (~1 Year Post-Release)', url: 'https://alex.nisnevich.com/blog/2024/06/02/wordbots_retrospective.html'},
	{year: 2024, month: 1, name: 'Reading List - 2023', url: 'https://alex.nisnevich.com/blog/2023/01/18/reading_list_2023.html'},
	{year: 2023, month: 8, name: '"Lingua o Dialetto?" Exploring Perceptions of Regional Italian Languages Over Time', url: 'https://nbviewer.org/github/AlexNisnevich/lingua-o-dialetto/blob/main/lingua-o-dialetto.ipynb'},
	{year: 2023, month: 1, name: 'Reading List - 2022', url: 'https://alex.nisnevich.com/blog/2023/01/10/reading_list_2022.html'},
	{year: 2022, month: 12, name: 'Extra! Extra! - Never Been to a Party Album Release', url: 'https://alex.nisnevich.com/blog/2022/12/19/extra_extra_never_been_to_a_party_release.html'},
	{year: 2022, month: 1, name: 'Reading List - 2021', url: 'https://alex.nisnevich.com/blog/2022/01/10/reading_list_2021.html'},
	{year: 2021, month: 1, name: 'Reading List - 2020', url: 'https://www.facebook.com/alex.nisnevich/posts/10157848567891828'},
	{year: 2020, month: 4, name: 'Migrating a ASP.NET Application from SQL Server to MySQL', url: 'https://alex.nisnevich.com/blog/2020/04/18/migrating_asp_net_mysql.html'},
	{year: 2020, month: 1, name: 'Reading List - 2019', url: 'https://www.facebook.com/notes/alex-nisnevich/reading-list-2019/10156322275831685/'},
	{year: 2019, month: 2, name: 'Visualizing Classical Music Influence with networkx', url: 'https://nbviewer.jupyter.org/github/AlexNisnevich/blog/blob/master/_notebooks/music-graphs.ipynb'},
	{year: 2019, month: 1, name: 'Reading List - 2018', url: 'https://www.facebook.com/notes/alex-nisnevich/reading-list-2018/10155545261246685/'},
	{year: 2018, month: 9, name: 'Creating Land-Use Maps with an HP 7475A Plotter', url: 'http://alex.nisnevich.com/blog/2018/09/15/plotting_land_use_maps.html'},
	{year: 2018, month: 8, name: 'Gator Album Release', url: 'http://alex.nisnevich.com/blog/2018/08/19/gator_album_release.html'},
	{year: 2018, month: 1, name: 'Reading List - 2017', url: 'https://www.facebook.com/notes/alex-nisnevich/reading-list-2017/10154826038166685'},
	{year: 2017, month: 9, name: 'The Leningrad Rock Scene, in Five Albums', url: 'https://www.facebook.com/notes/alex-nisnevich/the-leningrad-rock-scene-in-5-albums/10154560682836685/'},
	{year: 2017, month: 1, name: 'Reading List - 2016', url: 'https://www.facebook.com/notes/alex-nisnevich/reading-list-2016/10153930614281685'},
	{year: 2017, month: 10, name: 'Purple State Electoral Nightmare Scenario', url: 'https://alexnisnevich.github.io/one-weird-electoral-trick/'},
	{year: 2016, month: 8, name: 'In Search of a New Musical Genre, Using Spotify Data', url: 'https://nbviewer.jupyter.org/github/AlexNisnevich/blog/blob/master/_notebooks/exploring-music-genres.ipynb'},
	{year: 2016, month: 7, name: 'Secrets of natural language UIs: Translating English into computer actions', url: 'http://alex.nisnevich.com/blog/2016/07/01/secrets_of_natural_language_uis.html'},
	{year: 2016, month: 5, name: 'How many closed lambda-calculus terms are there of a given length?', url: 'http://alex.nisnevich.com/blog/2016/05/19/how_many_lambda_terms_are_there.html'},
	{year: 2016, month: 1, name: 'Reading List - 2015', url: 'https://www.facebook.com/alex.nisnevich/posts/10153269546231828'},
	{year: 2015, month: 10.8, name: 'Postmortem - Asshole Transit Bureaucrat 2015', url: 'http://alex.nisnevich.com/blog/2015/10/18/asshole_transit_bureaucrat_postmortem.html'},
	{year: 2015, month: 10, name: 'The Impact of Donations to Bernie Sanders', url: 'http://alexnisnevich.github.io/bernie-donations/'},
	{year: 2015, month: 1, name: 'Reading List - 2014', url: 'https://www.facebook.com/alex.nisnevich/posts/10152535243891828'},
	{year: 2014, month: 11, name: 'JSON Requests with rust-http', url: 'http://alex.nisnevich.com/blog/2014/10/23/json_requests_with_rust_http.html'},
	{year: 2014, month: 10.5, name: 'Some Words on Untrusted', url: 'http://alex.nisnevich.com/blog/2014/10/17/some_words_on_untrusted.html'},
	{year: 2014, month: 10, name: 'Setting up a Flask application on EC2 Ubuntu with Apache + mod_wsgi', url: 'http://alex.nisnevich.com/blog/2014/10/01/setting_up_flask_on_ec2.html'},
	{year: 2014, month: 9, name: 'Postmortem - Shattered Worlds', url: 'http://alex.nisnevich.com/blog/2014/09/27/shattered_worlds_postmortem.html'},
	{year: 2014, month: 6, name: 'A First Foray into Experiential Art', url: 'http://alex.nisnevich.com/blog/2014/06/27/my_first_foray_into_experiential_art.html'},
	{year: 2014, month: 5, name: 'Postmortem - Asteroid Tycoon', url: 'http://alex.nisnevich.com/blog/2014/05/07/asteroid_tycoon_postmortem.html'},
	{year: 2013, month: 9, name: 'Postmortem - 10 Second Roguelike', url: 'http://alex.nisnevich.com/blog/2013/09/03/10_second_roguelike_postmortem.html'},
	{year: 2013, month: 5.5, name: 'Rolling Your Own Mechanical Turk Form with ExternalQuestion and Rails', url: 'http://alex.nisnevich.com/blog/2013/05/23/rolling_your_own_mechanical_turk_form.html'},
	{year: 2013, month: 5, name: 'The Church-Rosser Theorem and the Consistency of Lambda Calculus', url: 'http://alex.nisnevich.com/blog/2013/05/17/consistency_of_lambda_calculus.html'},
	{year: 2013, month: 3, name: 'My Experience with Steam for Linux (64-bit Linux Mint Debian Edition)', url: 'http://alex.nisnevich.com/blog/2013/03/25/steam_on_linux.html'},
	{year: 2013, month: 2.5, name: 'Face Tracking with OpenCV and a USB Missile Launcher', url: 'http://alex.nisnevich.com/blog/2013/02/19/face_tracking_with_open_cv_and_a_usb_missile_launcher.html'},
	{year: 2013, month: 2, name: 'Installing a Brother printer on 64-bit Ubuntu/Debian', url: 'http://alex.nisnevich.com/blog/2013/02/07/installing_brother_printer.html'},
	{year: 2013, month: 1, name: 'Quantifying Linguistic Diversity', url: 'http://alex.nisnevich.com/blog/2013/01/11/quantifying_linguistic_diversity.html'},
	{year: 2012, month: 8, name: 'Playing Around with Ruby Hashes', url: 'http://alex.nisnevich.com/blog/2012/07/30/fun_with_ruby_hashes.html'},
	{year: 2012, month: 7.5, name: 'Dynamic Pluralization with PHP and jQuery', url: 'http://alex.nisnevich.com/blog/2012/07/30/dynamic_pluralization.html'},
	{year: 2012, month: 7, name: 'Refreshing Browsers over SSH', url: 'http://alex.nisnevich.com/blog/2012/07/25/browsers_and_ssh.html'},
	{year: 2012, month: 6.5, name: 'About this blog', url: 'http://alex.nisnevich.com/blog/2012/07/13/welcome.html'}
]

var papers = [
	{
		year: 2022,
		month: 5,
		title: 'Guided K-best Selection for Semantic Parsing Annotation',
		authors: 'Anton Belyy, Chieh-yang Huang, Jacob Andreas, Emmanouil Antonios Platanios, Sam Thomson, Richard Shin, Subhro Roy, Aleksandr Nisnevich, Charles Chen, Benjamin Van Durme',
		pub: 'Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics: System Demonstrations (pp. 114-126).',
		url: 'https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=15902700200135201793'
	},
	{
		year: 2020,
		month: 9,
		title: 'Task-oriented dialogue as dataflow synthesis',
		authors: 'Jacob Andreas, John Bufe, David Burkett, Charles Chen, Josh Clausman, Jean Crawford, Kate Crim, Jordan DeLoach, Leah Dorner, Jason Eisner, Hao Fang, Alan Guo, David Hall, Kristin Hayes, Kellie Hill, Diana Ho, Wendy Iwaszuk, Smriti Jha, Dan Klein, Jayant Krishnamurthy, Theo Lanman, Percy Liang, Christopher H. Lin, Ilya Lintsbakh, Andy McGovern, Aleksandr Nisnevich, Adam Pauls, Dmitrij Petters, Brent Read, Dan Roth, Subhro Roy, Jesse Rusak, Beth Short, Div Slomin, Ben Snyder, Stephon Striplin, Yu Su, Zachary Tellman, Sam Thomson, Andrei Vorobev, Izabela Witoszko, Jason Wolfe, Abby Wray, Yuchen Zhang, Alexander Zotov',
		pub: 'Transactions of the Association for Computational Linguistics 2020 Vol. 8, 556-571',
		url: 'https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=8490352103295945601'
	},
	{
		year: 2020,
		month: 4,
		title: 'Experience grounds language',
		authors: 'Yonatan Bisk, Ari Holtzman, Jesse Thomason, Jacob Andreas, Yoshua Bengio, Joyce Chai, Mirella Lapata, Angeliki Lazaridou, Jonathan May, Aleksandr Nisnevich, Nicolas Pinto, Joseph Turian',
		pub: 'arXiv preprint arXiv:2004.10151',
		url: 'https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=3734668471751920487'
	},
	{
		year: 2017,
		month: 7,
		title: 'Predicting all-cause risk of 30-day hospital readmission using artificial neural networks',
		authors: 'Mehdi Jamei, Aleksandr Nisnevich, Everett Wetchler, Sylvia Sudat, Eric Liu, Kirtan Upadhyaya',
		pub: 'PLoS ONE 12(7): e0181173',
		url: 'https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=17107633796071741739'
	},
	{
		year: 2015,
		month: 5,
		title: 'Probabilistically modeling semantic change',
		authors: 'Aleksandr Nisnevich, David Hall, Dan Klein',
		pub: 'Master\'s thesis, University of California, Berkeley',
		url: 'https://scholar.google.com/scholar?oi=bibs&hl=en&cluster=14928730421896491501'
	}
]
