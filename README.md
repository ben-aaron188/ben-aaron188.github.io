I am an Assistant Professor (Lecturer) in Data Science at the [Department of Security and Crime Science](http://www.ucl.ac.uk/jill-dando-institute) and the [Dawes Centre for Future Crime](http://www.ucl.ac.uk/jill-dando-institute/dawes-future-crime) at University College London. I also hold a guest affiliation at the University of Amsterdam's [Department of Psychology](http://www.uva.nl/en/disciplines/psychology).

My research is about two areas:

(1) Computational approaches to security and crime problems

With more data and a changing landscape of problems, computational techniques are an exciting way to look at exisitng and novel crime and security problems. I'm especially interested in emerging crime problems and understanding them through complex text data with techniques from natural language processing and applied machine learning.

Ideas I'm working on:

- language use on extremist online forums
- hybrid decision-making in uncertain, large-volume environments
- drill music on YouTube
- keyboard dynamics as a biometric identifier

(2) Methods of behavioural data science

Before computational methods can help us understand problems better (or at scale), we need good methods and tested assumptions. I'm particularly interested in building robust methods to learn about human behaviour from text and web data. Aside from natural language processing, I'm here also interested in the tool development for computational social science including applied machine learning.

Ideas I'm working on:

- automated, learning-based text anonymisation [(SAGE Ocean concept grant winner)](https://uk.sagepub.com/en-gb/eur/press/sage-ocean-announces-text-wash-as-2019-concept-grant-winner)
- examining the fundamental assumptions of behavioural data science (e.g. the cognition-language-behaviour nexus)
- sample size estimation for machine learning in the social and behavioural sciences
- researchers' degrees of freedom in natural language processing studies

_For recent talks/workshops/media coverage, see [here](./sub/talks.md)_

_Some of the ongoing and past projects were funded by [SAGE](https://uk.sagepub.com/en-gb/eur/press/sage-ocean-announces-text-wash-as-2019-concept-grant-winner), [RUSI/GIFCT](https://rusi.org/rusi-news/new-partnership-global-internet-forum-counter-terrorism), [The Dutch Ministry of Security and Justice](https://www.rijksoverheid.nl/ministeries/ministerie-van-justitie-en-veiligheid)_

# Research group

## PhD students

### Josh Kamps

- Background: Computer Science, Crime Science
- Topic: Detecting cryptocurrency crime
- Supervised with Dr Sarah Meiklejohn
- Funded by: UCL Dawes Centre for Future Crime

### Arianna Trozze

- Background: Law, Policy Making
- Topic: Detecting cryptocurrency crime
- Supervised with Dr Toby Davies
- Funded by: UCL Cybercrime Centre for Doctoral Training

### Maximilian Mozes [www](http://mmozes.net/)

- Background: Computer Science, Natural Language Processing
- Topic: Adversarial perturbations in natural language processing
- Supervised with Prof. Lewis Griffin
- Funded by: UCL Dawes Centre for Future Crime

### Felix Soldner

- Background: Psychology, Brain & Cognitive Sciences
- Topic: Detecting and mitigating online consumer fraud
- Supervised with Prof. Shane Johnson
- Funded by: UCL Dawes Centre for Future Crime

### Daniel Hammocks [www](https://danielhammocks.uk/)

- Background: Mathematics, Data Science
- Topic: Detecting emerging crimes using data science techniques
- Supervised with Prof. Kate Bowers
- Funded by: EPSRC

### Isabelle van der Vegt [www](http://isabellevdv.net/)

- Background: Linguistics, Psychology
- Topic: Understanding and predicting threats of violence using computational linguistics
- Supervised with Prof. Paul Gill (UCL)
- Funded by Prof P Gill's ERC grant 'GRIEVANCE'

## Dawes reading group

We are running a bi-weekly reading group on topics around future crime (incl. data science, policy-making). Info at [https://felix-soldner.github.io/dawes_reading_group/](https://felix-soldner.github.io/dawes_reading_group/)


## Dissertation projects

- Hynek Halakuc (BSc Crime Science UCL) - Initial growth of different illicit drug category listings on the Alphaba dark market
- Vlad Pasca (BSc Crime Science UCL) - An examination of adversarial perturbations for spam detection
- Ana Wilmer (BSc Crime Science UCL) - Extreme jargon adopters of a far-right online forum
- Satoshi Takemoto (BSc Crime Science UCL) - Assessing differences in news coverage between the Japanse Yakuza and semi-organized crime groups (hangure)
- [Past dissertation projects](./sub/pastdissertations.md)

# Teaching

## 2019-2020

- SECU0050 Data Science for crime scientists (3rd year, BSc in Crime Science, UCL)
- SECU0057 Applied Data Science (MSc in Crime Science, UCL)

## 2018-2019

- SECU0013 Probability, Statistics and Modelling 2 (2nd year, BSc in Crime Science, UCL) // [materials](https://github.com/ben-aaron188/ucl_psm2_20182019) + [companion website](https://bkleinberg.net/ucl_psm2_20182019/).
- SECU0050 Data Science for crime scientists (3rd year, BSc in Crime Science, UCL) // [materials](https://github.com/ben-aaron188/ucl_aca_20182019) + [companion website](https://bkleinberg.net/ucl_aca_20182019/).
- [Crime Science](http://www.uva.nl/en/programmes/honours-modules-iis/honoursmodule-crime-science/honoursmodule-crime-science.html?1549646204808) (honours module, UvA)

## 2017-2018

- Crime Science, BSc module, Institute for Inderdisciplinary Studies, University of Amsterdam, Sem. 2, 2017/2018
- Deception and Lie Detection, MSc module, Department of Psychology, University of Amsterdam, Sem. 1 2017/2018
- Crime Science, BSc module, Institute for Inderdisciplinary Studies, University of Amsterdam, Sem. 1, 2017/2018

## 2016-2017

- Deception and Lie Detection, MSc module, Department of Psychology, University of Amsterdam, Sem. 1 2016/2017

## 2015-2016

- Deception and Lie Detection, MSc module, Department of Psychology, University of Amsterdam, Sem. 1 2015/2016
)

# Software

- NETANOS - Named entity-based text anonymization for open science
    - Anonymises bunches of text files by removing identifiable information
    - de-identifies numbers, persons, locations, places, pronouns, dates and times
    - Developed with [Maximilian Mozes](http://www.mmozes.net/) and [Bruno Verschuere](http://www.uva.nl/profiel/v/e/b.j.verschuere/b.j.verschuere.html)
    - Available on [npm](https://www.npmjs.com/package/netanos), source code [on GitHub](https://github.com/ben-aaron188/netanos)
    - Published paper in [JOSS](http://joss.theoj.org/papers/cd40892f7ea198aded1bc90ba33c6655) and experimental validation on [OSF servers](https://osf.io/w9nhb/)
    - Accessible interface version lives on [netanos.io](http://netanos.io/)
- Naive context sentiment analysis
    -  Performs sentiment analysis that handles valence shifters (e.g., "really", "not", "hardly", "but") on non-punctuated or poorly punctuated data
    -  Code lives [on GitHub](https://github.com/ben-aaron188/naive_context_sentiment)
    -  Specific use cases:
        - data that are not punctuated at all (e.g., auto-generated YouTube transcripts)
        - data that are badly punctuated (e.g., data from blogs where punctuation is not necessarily a given)
        - very brief text data: Twitter data, for example, even if properly annotated for sentence-boundary-disambiguation, would return one or two sentiment values with other sentiment extraction packages
   - Contributors: [Maximilian Mozes](http://www.mmozes.net/) and Isabelle van der Vegt



# Brief CV

- Assistant Professor in Data Science (Department of Security and Crime Science, UCL)
- PhD on detecting deceptive intentions on a large scale (Department of Psychology, University of Amsterdam) [2018]
- MSc in Crime Science (University College London) [2015]
- BSc in Psychology - specialised in Psychological Methods (University of Amsterdam) [2014]

Links:

- [Code and software on GitHub](https://github.com/ben-aaron188)
- [Google Scholar for all publications](https://scholar.google.nl/citations?user=Ms2d7OsAAAAJ&hl=en)
- [University of Amsterdam profile](http://www.uva.nl/profiel/k/l/b.a.r.kleinberg/b.a.r.kleinberg.html)
- [Data repository and archive on the Open Science Framework](https://osf.io/zdz5q/)
- [Twitter](https://twitter.com/benkleinberg)
- [Researchgate](https://www.researchgate.net/profile/Bennett_Kleinberg)
- [Stackoverflow profile](https://stackoverflow.com/users/3421089/ben-aaron)
- [LinkedIn profile](https://nl.linkedin.com/in/barkleinberg)

Review service

- Scientific Reports (Nature), Memory & Cognition, Applied Cognitive Psychology, Computers in Human Behavior, Acta Psychologica, Personality and Individual Differences, Current Psychology, Cognitive Research: Principles and Implications, Crime Science  

# Publications

All publications can be found on [my Google Scholar page](https://scholar.google.nl/citations?user=Ms2d7OsAAAAJ&hl=en).

_A list updated in Oct 2019 is available [here](./sub/publications.md)_

-----
### Contact

If you are interested in doing a PhD, working as a research assistant (in London or remotely) or doing a BSc/MSc dissertation, feel free to reach out to me.