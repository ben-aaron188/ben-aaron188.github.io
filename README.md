I am an Assistant Professor in Data Science at the [Department of Security and Crime Science](http://www.ucl.ac.uk/jill-dando-institute) and the [Dawes Centre for Future Crime](http://www.ucl.ac.uk/jill-dando-institute/dawes-future-crime) at University College London. I also hold a guest affiliation at the University of Amsterdam's [Department of Psychology](http://www.uva.nl/en/disciplines/psychology).

I'm interested in solving and understanding (future) crime and security problems with computational techniques. My research uses a mix of open and closed-source data, and analytical and methodological approaches from computational linguistics, machine learning, experimental research and simulation studies. All of my research is aimed at solving problems in the real world.

Current research questions include:

- Predicting user (dis)engagement from extremist forums
- Automated detection of hate speech targets
- Identifying early warning signals to detect emerging crime trends
- Understanding and predicting the temporal trajectories of abusive language on online forums
- Examining hybrid decision-making approaches in uncertain environments (e.g., integrating human and automated machine learning judgments)
- Cryptocurrency pump-and-dump detection and mitigation
- Dynamic, adaptive information elicitation for large-scale passenger screening


Methodological topics:

- The validity of online sensor data (e.g., forum data, dark web data)
- The stability of computational approaches (e.g., class-imbalance problems, context dependency of machine learning, bad label propagation for prediction models)
- New ways of generating data for crime research (e.g., simulation approaches, web-scraping)


## News

- 09/2018 **EMNLP paper on sentiment styles in 27k YouTube vlogs** To appear at EMNLP 2018 in Brussels. [[preprint]](https://arxiv.org/ftp/arxiv/papers/1808/1808.09722.pdf) [[data]](https://github.com/ben-aaron188/narrative_structures) [[code]](https://github.com/ben-aaron188/naive_context_sentiment)
- 09/2018 **Joint project with Greater Manchester Police** Together with [Reka Solymosi](https://www.research.manchester.ac.uk/portal/reka.solymosi.html) we will work on threat scanning using data science techniques.
- 09/2018 **New release: text anonymisation software** Our NETANOS text anonymisation software is now available in an accessible drag-and-drop interface at [netanos.io](http://netanos.io/).
- 08/2018 **Comp. Social Science workshop** Together with Isabelle van der Vegt (UCL) and Maximilian Mozes (TU Munich), I will organise a tutorial workshop on Linguistic Temporal Trajectory Analysis in R [[companion website]](https://bkleinberg.net/ltta_workshop/) [[EuroCSS website]](http://symposium.computationalsocialscience.eu/2018/#call)
- 08/2018 **Coling paper** Our paper on fake news detection with [Vero Pérez-Rosas](https://sites.google.com/site/perezrosasveronica/home) and [Rada Mihalcea](https://web.eecs.umich.edu/~mihalcea/) will be published and presented at Coling 2018 [[preprint here]](https://arxiv.org/abs/1708.07104)
- 07/2018 **GIFCT funding (PI)** Our proposal on human-machine integration for extremist content removal was funded by the joint [RUSI](https://rusi.org/) and [Global Internet Forum to Counter Terrorism](https://gifct.org/) initiative (with Paul Gill and RA Isabelle van der Vegt, UCL)


# Software

- **NETANOS - Named entity-based text anonymization for open science**
    - Anonymises bunches of text files by removing identifiable information
    - de-identifies numbers, persons, locations, places, pronouns, dates and times
    - Developed with [Maximilian Mozes](http://www.mmozes.net/) and [Bruno Verschuere](http://www.uva.nl/profiel/v/e/b.j.verschuere/b.j.verschuere.html)
    - Available on [npm](https://www.npmjs.com/package/netanos), source code [on GitHub](https://github.com/ben-aaron188/netanos)
    - Published paper in [JOSS](http://joss.theoj.org/papers/cd40892f7ea198aded1bc90ba33c6655) and experimental validation on [OSF servers](https://osf.io/w9nhb/)
    - Accessible interface version lives on [netanos.io](http://netanos.io/)

Example:

```javascript
var input = "Max and Ben spent more than 1000 hours on writing the software. They started in August 2016 in Amsterdam.";

netanos.anon(input, function(output) {
    console.log(output);
});

/*
"[PERSON_1] and [PERSON_2] spent more than [DATE/TIME_1] on writing the software. They started in [DATE/TIME_2] in [LOCATION_1]."
*/
```


- **Naive context sentiment analysis**
    -  Performs sentiment analysis that handles valence shifters (e.g., "really", "not", "hardly", "but") on non-punctuated or poorly punctuated data
    -  Code lives [on GitHub](https://github.com/ben-aaron188/naive_context_sentiment)
    -  Specific use cases:
        - data that are not punctuated at all (e.g., auto-generated YouTube transcripts)
        - data that are badly punctuated (e.g., data from blogs where punctuation is not necessarily a given)
        - very brief text data: Twitter data, for example, even if properly annotated for sentence-boundary-disambiguation, would return one or two sentiment values with other sentiment extraction packages
   - Contributors: [Maximilian Mozes](http://www.mmozes.net/) and Isabelle van der Vegt

From the README:

```r
#3. USAGE EXAMPLE
##for texts from source, use the function: https://github.com/ben-aaron188/r_helper_functions/blob/master/txt_df_from_dir.R
# data = data.frame('text' = character(3)
#                   , 'text_id' = character(3))
# data$text = c('this is a super, great positive sentence and I just love doing this. Now this will be very negative and with disgusting words and ugly phrases'
#               , 'here we begin in a bad, bad, and ugly way but quickly become overly positive for all the great things this exciting code can do'
#               , "I haven't been sad in a long time. I am extremely happy today. It's a good day. But suddenly I'm only a little bit happy. Then I'm not happy at all. In fact, I am now the least happy person on the planet. There is no happiness left in me. Wait, it's returned! I don't feel so bad after all!")
# data$text_id = c('text1', 'text2', 'text3')
#
# ncs_full(txt_input_col = data$text
#          , txt_id_col = data$text_id
#          , low_pass_filter_size = 5
#          , transform_values = T
#          , normalize_values = F
#          , min_tokens = 10
#          , cluster_lower = 2
#          , cluster_upper = 2
#          )

### END
```

# Selected recent publications

- Kleinberg, B., Mozes, M., & van der Vegt, I. (2018). [Identifying the 
sentiment styles of YouTube’s vloggers](https://arxiv.org/ftp/arxiv/papers/1808/1808.09722.pdf), EMNLP 2018 [[DATA]](https://github.com/ben-aaron188/narrative_structures) [[CODE]](https://github.com/ben-aaron188/naive_context_sentiment)
- Pérez-Rosas, V., Kleinberg, B., Lefevre, A., & Mihalcea, R. (2018). [Automatic Detection of Fake News](http://aclweb.org/anthology/C18-1287), COLING 2018 [[DATA]](http://web.eecs.umich.edu/~mihalcea/downloads.html#FakeNews)
- Kleinberg, B., Warmelink, L., Arntz, A., & Verschuere, B. (2018). [The first direct replication on using verbal credibility assessment for the detection of deceptive intentions](https://onlinelibrary.wiley.com/doi/pdf/10.1002/acp.3439), Applied Cognitive Psychology [[DATA]](https://osf.io/t29dz/)
- Kleinberg, B., van der Toolen, Y., Vrij, A., Arntz, A., & Verschuere, B. (2018). [Automated verbal credibility assessment of intentions: The model statement technique and predictive modeling](https://onlinelibrary.wiley.com/doi/pdf/10.1002/acp.3407), Applied Cognitive Psychology [[DATA]](https://osf.io/wqc4p/)
- Kleinberg, B., van der Toolen, Y., Arntz, A., & Verschuere, B. (2018). [Detecting Concealed Information on a Large Scale: Possibilities and Problems](http://groups.psych.northwestern.edu/rosenfeld/documents/Rosenfeld,%20J.%20Peter.%20Detecting%20Concealed%20Information%20and%20Deception%20Recent%20Developments.%20(PDF).pdf#page=396), Book chapter

All publications can be found on [my Google Scholar page](https://scholar.google.nl/citations?user=Ms2d7OsAAAAJ&hl=en).


# About me

### Brief CV

- PhD on detecting deceptive intentions on a large scale (Department of Psychology, University of Amsterdam) [2018]
- MSc in Crime Science (University College London) [2015]
- BSc in Psychology - specialised in Psychological Methods (University of Amsterdam) [2014]

### Links

- [University of Amsterdam profile](http://www.uva.nl/profiel/k/l/b.a.r.kleinberg/b.a.r.kleinberg.html)
- [Data repository and archive on the Open Science Framework](https://osf.io/zdz5q/)
- [Code and software on GitHub](https://github.com/ben-aaron188)
- [Twitter](https://twitter.com/benkleinberg)
- [Researchgate for a research overview and papers](https://www.researchgate.net/profile/Bennett_Kleinberg)
- [Google Scholar for all publications](https://scholar.google.nl/citations?user=Ms2d7OsAAAAJ&hl=en)
- [Stackoverflow profile](https://stackoverflow.com/users/3421089/ben-aaron)
- [LinkedIn profile](https://nl.linkedin.com/in/barkleinberg)


# Teaching

### 2018 - now (University College London) 

**Possible topics for (UG & PG) dissertations and internships 2018/2019:**

- testing the reliability and validity of online sensor data (e.g., Twitter)
- detecting massive online missinformation (e.g., fake news, polarised content)
- deception detection
- detecting early warning signals of emerging crimes
- understanding linguistic trajectories in online forums
- computational approaches to existing and new crime problems
- methodological research (e.g., dealing with new forms of data, statistical simulation studies)
- dark crime data (i.e., hidden data, messy data, multimodal data)

---------

**MODULES**

- Probability, Statistics and Modelling 2 (2nd year, BSc in Crime Science)
    - Includes Bayesian inference, discrete multivariate analysis, GLM
    - Open science lab (reproducibility, questionable research practices)
<!--    - Materials for this module-->
- Computational Crime Science (3rd year, BSc in Crime Science)
    - New module in 2018/2019
    - Includes: web-scraping, computational linguistics basics in R, (un)supervised machine learning, simulation studies, special topics (e.g., GoogleTrends, forecasting + _now_casting, NNets) 
   <!-- - Materials for this module-->

### 2015-2018 (University of Amsterdam)

- Crime Science (undergrad module; I developed the module and taught it to honours students and as an open UvA series)
- Deception and Lie Detection (postgrad module; co-taught and co-developed with Bruno Verschuere)


### Review service

- Scientific Reports (Nature), Memory & Cognition, Applied Cognitive Psychology, Computers in Human Behavior, Acta Psychologica, Personality and Individual Differences, Current Psychology, Cognitive Research: Principles and Implications  


# PhDs & students

### Felix Solder

- PhD student (2018-2021)
- Topic: Detecting emerging crimes using Data Science techniques (1/2)
- Supervised with Prof. Shane Johnson
- Funded by: UCL Dawes Centre for Future Crime


### Daniel Hammocks

- MRes+PhD student (2018 - 2022)
- Topic: Detecting emerging crimes using Data Science techniques (2/2)
- Supervised with Prof. Kate Bowers
- Funded by: EPSRC


### Isabelle van der Vegt

- PhD student (2018 - 2021)
- Topic: Understanding and predicting threats of violence using computational linguistics.
- Supervised with Dr Paul Gill (UCL)
- Funded by Dr P Gill's ERC grant 'GRIEVANCE'


---------

### MSc dissertations
- Thijs Veltman ("Participants's strategies in deception about intentions")
- Lex Ehrhardt ("Strategies of airport security practitioners to detect suspicious passengers")
- Wietse Dekker ("Temporal information as cue of deceptive intentions (replication study)"
- Fleur van der Meer ("Chat-based information elicitation for large-scale deception detection")
- Isabelle van der Vegt ("Dynamic strategic interviewing to detect deceptive intentions")
- Tinde Haarlemmer ("Combined testing to address leakage in the RT Concealed Information Test")
- Carmen Sergiou ("Detecting informed innocent participants in the RT Concealed Information Test")


### Internships & BSc theses
- Josh Kamps (cryptocurrency pump-and-dumps; BSc thesis in Computer Science, VU University Amsterdam)
- Leonie Waldeck (sampling methods in unbalanced class problems; internship MSc Behavioral Data Science, UvA)
- Jiri Munich (detecting scientific fraud using computational linguistics; internship Research Master Psychology, UvA)
- Stella de Ree (verbal deception detection from a linguistic perspective; BSc thesis in Linguistics, UvA)
- Felix Soldner (detecting fake reviews in an experimental study; internship MSc Cognitive Science, UvA)
- Manon Schutte (detecting fake reviews in an experimental study; internship Research Master Psychology, UvA)
- Maximilian Mozes (chat-based information elicitaiton + automated text anonymization; internship)



# Talks & media

### Recent conference talks

- _Using named entities for computer-automated verbal deception detection_ International Conference on Computational Social Science (July, 2017, Cologne, Germany)
- _Towards large-scale cognition-based deception detection_ Behaviour Detection study group Research & Development Workshop, European Civil Aviation Conference (March, 2017, Madrid, Spain)
- _Using named entities for computer-automated verbal deception detection_ Reading the Deceptive Brain and Mind (March 2017, Lucca, Italy)
- _From theory to large-scale applications: Experimental results on the detectability of false intent_ International conference of the Society for Terrorism Research (November 2016, The Hague, The Netherlands)
- _Routine activities or social disorganization? (or both?)_ Penny Willow Prize lecture of the Department of Security and Crime Science presented at University College London (July 2016, London, UK)
- _Using the verifiability of details as a test of deception_ Presented at Proceedings of the Second Workshop on Computational Approaches to Deception Detection, NAACL 2016 (June 2016, San Diego, California, US)


### Workshops + invited talks

- UPCOMING _Linguistic Temporal Trajectory Analysis_ European Symposium Series on Societal Challenges in Computational Social Science [[symposium website]](http://symposium.computationalsocialscience.eu/2018/)
- _Deception detection!!??_ Workshop to security professionals in the programme Predictive Profiling at SoSecure Netherlands (30 March 2018)
- _Crime Science and the crime drop_ Guest lecture in the VU University Amsterdam module "[Biosocial aspects of antisocial behavior](https://www.vu.nl/nl/opleidingen/overig-onderwijs/honours-programme/interdepartmental-courses/biosocial-aspects-antisocial-behaviour-2/index.aspx)" (14 February 2018)
- _What is Crime Science_ Lecture for the student association of Social Psychology at the University of Amsterdam (December 2017)
- 	_Why we need a Crime Science_ Master class at the Extensus honours association of the University of Amsterdam, Free University of Amsterdam, and Amsterdam University College (29 November 2017)
- _Crime Science matters_ Mini lecture at the 385th anniversary event of the University of Amsterdam (18 November 2017)
- _Terrorism prevention with predictive modeling in R_ Workshop talk at the N8 event “Building tools and training for crime analysts using R”, University of Manchester (25 September 2017)
- _Practical workshop on deception detection_ Presented as workshop at the University of Groningen, The Netherlands (13 April 2017, with Yaloe van der Toolen)
- _Modern deception detection_ Presented as workshop at Labyrint Leiden at the University Leiden, The Netherlands (30 November 2016, with Yaloe van der Toolen)
- _Feit of fictie? (EN: Fact or fiction?)_ Presented as workshop at Het Nutshuis at the 2016 - Museum Night in The Hague (29 October 2016, with Yaloe van der Toolen)
- _Chat-based information elicitation mini-demonstration/workshop_ Presented as research demonstration to honours students in Aviation Engineering of the Hogeschool van Amsterdam (Amsterdam, September 2016, with Yaloe van der Toolen & Maximilian Mozes)



### Media

- Coverage of our fake news paper [here](https://thenextweb.com/artificial-intelligence/2018/08/22/this-fake-news-detection-algorithm-outperforms-humans/), [here](https://www.tribuneindia.com/news/science-technology/new-system-can-detect-fake-news-better-than-humans/641021.html), [here](https://www.futurity.org/fake-news-detecting-algorithm-1844942/), and [here](https://www.financialexpress.com/industry/technology/in-fight-against-fake-news-technology-outsmarts-humans-at-detecting-misinformation/1288197/)
- Radio interview on AI and deception detection with BNR News Radio (6 June 2018) (Dutch) [[podcast]](https://www.bnr.nl/player/audio/10083380/10345415) (me at 1:49:09)
- Radio interview on deception detection with Radio Swammerdam, Amsterdam FM (29 January 2017) (Dutch) [[podcast]](http://www.radioswammerdam.nl/archive/op-het-slechte-pad-i-leugentje-om-je-eigen-bestwil/)
- Interview/comment on the veiling study with Psychology Today: [What Is the Face of Truth?](https://www.psychologytoday.com/blog/brainstorm/201608/what-is-the-face-truth)
- Press release on the veiling study by the American Psychological Association: [Veils, Headscarves May Improve Observers' Ability To Judge Truthfulness, Study Finds](http://www.apa.org/news/press/releases/2016/06/judge-truthfulness.aspx)


------------
