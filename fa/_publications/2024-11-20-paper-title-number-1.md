---
title: "Reliable Vehicle Detection and Tracking on Highways using Geo-Heinz Corner Response, DBSCAN, and CSRT"
collection: publications
category: manuscripts
permalink: /publication/2024-11-20-paper-title-number-1
excerpt: ''
date: 2024-11-20
venue: 'Multimedia Tools and Applications'
slidesurl: 'https://ooiiooiioo.github.io/files/Vehicle_Detection.pdf'
paperurl: 'https://ooiiooiioo.github.io/files/Vehicle_Detection.pdf'
bibtexurl: 'https://ooiiooiioo.github.io/files/bibtex1.bib'
citation: 'Mohammad Mahdi Khorsand Aalam , Mustafa Sadeghi , Hadi Sadoghi Yazdi. (2025). &quot;Paper Title Number 1.&quot; <i>Multimedia Tools and Applications 1</i>. 1(1).'
---
We propose a reliable vehicle detection and tracking framework designed for highway
camera surveillance, integrating multi-scale Geo-Heinz Mean corner response, DBSCAN
clustering, and CSRT-based tracking. The method begins with a Gaussian Mixture-based
Background Subtractor (MOG2) to detect moving objects, followed by morphological
operations to refine the foreground mask.
A novel multi-scale Geo-Heinz Mean corner response algorithm is then applied to
extract prominent corners by computing gradients, constructing a structure tensor, and
utilizing a Heinz mean-based quality criterion for precise corner detection. These detected
corners undergo motion analysis and foreground masking before being grouped into po-
tential vehicle regions using density-based spatial clustering (DBSCAN).
To enhance tracking stability, a temporal smoothing mechanism minimizes bounding
box fluctuations across consecutive frames, effectively reducing motion jitter and transient
noise. CSRT trackers are then initialized on the refined candidate regions, with reinitial-
ization guided by an Intersection-over-Union (IoU) criterion to maintain consistent vehicle
identities despite occlusions or rapid motion.
Extensive experiments on highway traffic video datasets validate the high detection
accuracy and robust tracking performance of the proposed approach under real-world
conditions. The modular framework ensures real-time operation and provides a scalable
foundationforfutureadvancements, suchasadaptiveparametertuninganddeeplearning-
based classification. This method is particularly well-suited for applications in traffic
monitoring, intelligent transportation systems, and advanced surveillance networks.