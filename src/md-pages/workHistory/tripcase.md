---
path: "/work/tripcase-s3"
dateFrom: "2015-06-01"
dateTo: "2016-09-01"
description: "S3 Smartwatch App"
link: "https://www.tripcase.com/login"
title: "TripCase"
group: "work"
---

A long time ago, in a start-up not so far away I was stoked to have the opportunity to help the Sabre TripCase team build out their new TripCase smart watch app for the Samsung S3 watch.
So, naturally, after geeking out about getting to be the “chosen one” to not only build a smart watch app but to convert an already amazingly successful app into a smaller and more compact version too? 👍

## TripCase
For those of you who are unfamiliar with TC — it’s an award winning travel management app that organizes all the info you could possibly need in order to prepare you for traveling (flight, hotel, rental, lodging, meetings, etc.). If you don’t already use it, I highly recommend it.

## The Problem
We had a successful mobile & web app that needed to be minimized and converted into the Samsung & Android smart watch versions.

I worked along a very talented (now at Google) designer Roque Silva, who made the beautiful conversion of the current app into the smart watch versions for both the Samsung & Android platforms. Before there were designs though, we would get together for the majority of the day going over IA & wire-framing to help point us in a successful direction.

The biggest challenge with this process was not just making things look pretty in a new way, it was needing to learn & utilize gesture patterns that are common for both watch versions. For example, the S3 had a new feature of a rotating dial around the screen for users to navigate views with which was absent from all Android related devices. Additionally, Android watches have a pattern of giving information in a certain layout (scroll down or swipe into the view left/right). Once again, this pattern was different in Samsung OS watches (scroll down or tap into view).

How we solved this problem was by getting our hands on the S3 itself and using other successful S3 specific watch apps (like Nike, etc.). After getting the feel of where Samsung was trying to go and how they wanted the user to utilize this new watch, we had a good starting point for our wire-framing which would then feed the designs.

## The REAL Problem (The Tech)
Let’s get a little more authentic and awkward…the Samsung S3 used their official OS named “Tizen” (why do they need their own OS? Who knows?). The good news, it is a web-supporting platform which allowed me to have the opportunity to build this app. The bad news, it was not fully released during this process and updated the SDK you were forced to use multiple times with massive breaking changes (specific to our app).

Can you guess what happened in result of that? I’ll tell you — me wasting my time and having to rebuild the app multiple versions. Needless to say, it put a pretty bad taste in my mouth and I cannot look at Samsung software the same again. 😭

## The Solution
Alas, let’s talk about the positive stuff and end on a good note. Although re-builds are exhausting and only put you in technical debt, it allowed me the opportunity to learn more about the Components built into and being added to the OS system. I mean, dev-ing out an app for Tizen now might be awesome? …I think they even support React now?

Anyways, I wound up having to use a now pretty archaic tech stack of just HTML, SCSS, JQuery, and Gulp to handle all the tasks. For unit testing, I just used Mocha/Chai. Outside of that, there was really nothing special about it.

On the OS technical side, similar to iOS/Android, Tizen came with certain Components that we needed to use to follow Samsung design patterns (the main view in Fig.2 above contained what was called a “PageIndicator”).

## Fin
Even though this turned out to be a pretty chaotic project due to the Tizen OS, it was always a blast working with Roque and the TripCase team to deliver something that people who own the S3 watch can utilize to help benefit and make their life easier. That’s my ultimate goal in this industry, to make beautiful and amazing apps that help make people’s lives easier. If I (and we) are not doing that — we’re failing.