---
comments: true
---

# Makuro Studio


## Build beautifull app with flutter
![flutter](http://localhost:8080/assets/img/flutter1.png)
Flutter is an open-source software development kit which enables smooth and easy cross-platform mobile app development. You can build high quality natively compiled apps for iOS and Android quickly, without having to write the code for the two apps separately. All you need is one codebase for both platforms.

Last year, Tim Sneath, product manager of Flutter announced an increasing use of Flutter with more than 2 million developers using the toolkit since its release in 2018. The spring update also reveals that it's seeing an uptick in not just consumer apps but also enterprise app development.

In this article we are going to introduce this developer-friendly app development language. We’ll explain what Flutter is, and we will brief out its advantages and disadvantages.

### What is Flutter?
Back in the days of Objective C/Swift and Java/Kotlin as primary languages for mobile development, building apps was expensive. You had to build two separate apps, which obviously meant doing the work twice.

To solve this problem, several frameworks have been constructed for the creation of hybrid (or cross-platform) apps in HTML5 and Javascript. Among the cross-platform toolkits, including Phonegap, Xamarin, React Native, and more, the Flutter framework has quickly become increasingly popular among developers, enterprises, entrepreneurs and users.

Flutter is a portable UI toolkit for building native-like apps across mobile, web and desktop, from a single codebase. It uses the programming language Dart and incorporates Material Design and Cupertino widgets. Flutter developers can create spectacular UI that looks and feels native. It behaves naturally on any platform, even though you’re using one codebase.

Flutter is the only framework with a mobile SDK that provides a responsive style without using a Javascript bridge, thereby reaching a level of performance that rivals its cousin and direct competitor React Native. It easily integrates with the different platforms such as Android, IOS and Linux, MAC, Windows and Google Fuchsia applications.

### What is Flutter used for?
Flutter is one of the best solutions to develop apps for Android and iOS, without having to write in a different codebase for each platform. The smartphone versions of these apps function as true, native apps on Apple and Android devices and are compiled for the respective platform before publication. They do not need a runtime module or a browser. Using the same codebase, it is also possible to create web apps for browsers as well as native programs for Windows, Linux and macOS.

Google itself uses Flutter for several modules of the Google Assistant and for the user interface of the Google Home hub. Well known e-commerce service providers such as eBay, Groupon or Alibaba Group use Flutter to give their mobile and web apps a uniform look.

### Apps developed on Flutter

The popularity of Flutter app development is constantly growing. Now Flutter is widely used to create apps for the likes of Alibaba, Yandex, Airbnb, Uber, eBay and other leading companies. Here is a selection of the top Flutter apps.
![flutter2](http://localhost:8080/assets/img/flutter2.png)
![flutter3](http://localhost:8080/assets/img/flutter3.png)

more: [App Flutter](https://flutter.dev/showcase)  
source: https://www.appify.digital/post/flutter-app-development


## Build powerfull server with nodejs
![nodejs](http://localhost:8080/assets/img/nodejs1.png)
JavaScript is one of the most popular programming languages in the world. It powers millions of websites today, and it has attracted droves of developers and designers to build features for the web. If you’re new to programming, JavaScript is easily one of the best programming languages to get under your belt.

For its first 20 years, JavaScript was used mainly for client-side scripting. Since JavaScript could be used only within the `<script>` tag, developers had to work in multiple languages and frameworks between the front-end and back-end components. Later came Node.js, which is a run-time environment that includes everything required to execute a program written in JavaScript.

Node.js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine, and it uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications.

Node.js is written in C, C++, and JavaScript.

Wikipedia defines Node.js as “a packaged compilation of Google’s V8 JavaScript engine, the libuv platform abstraction layer, and a core library, which is itself primarily written in JavaScript.”

The runtime uses Chrome V8 internally, which is the JavaScript execution engine, and it’s also written in C++. This adds additional use cases to Node.js’s repertoire, such as accessing internal system functionality (like networking).

Node.js uses the “Single Threaded Event Loop” architecture to handle multiple clients at the same time. To understand how this is different from other runtimes, we need to understand how multi-threaded concurrent clients are handled in languages like Java

In a multi-threaded request-response model, multiple clients send a request, and the server processes each one before sending the response back. However, multiple threads are used to process concurrent calls. These threads are defined in a thread pool, and each time a request comes in, an individual thread is assigned to handle it.

![nodejs](http://localhost:8080/assets/img/node2.png)

Node.js works differently. Let’s take a look at each step it goes through:

Node.js maintains a limited thread pool to serve requests.
Whenever a request comes, Node.js places it into a queue.
Now, the single-threaded “Event loop”—the core component—comes into the picture. This event loop waits for requests indefinitely.
When a request comes in, the loop picks it up from the queue and checks whether it requires a blocking input/output (I/O) operation. If not, it processes the request and sends a response.
If the request has a blocking operation to perform, the event loop assigns a thread from the internal thread pool to process the request. There are limited internal threads available. This group of auxiliary threads is called the worker group.
The event loop tracks blocking requests and places them in the queue once the blocking task is processed. This is how it maintains its non-blocking nature.
Since Node.js uses fewer threads, it utilizes fewer resources/memory, resulting in faster task execution. So for our purposes, this single-threaded architecture is equivalent to multi-threaded architecture. When one needs to process data-intensive tasks, then using multi-threaded languages like Java makes much more sense. But for real-time applications, Node.js is the obvious choice.

### Features Of Node.js

Node.js has grown quickly in the last few years. This is thanks to the vast list of features it provides:

Easy—Node.js is quite easy to start with. It’s a go-to choice for web development beginners. With a lot of tutorials and a large community—getting started is very easy.
Scalable—It provides vast scalability for applications. Node.js, being single-threaded, is capable of handling a huge number of simultaneous connections with high throughput.
Speed—Non-blocking thread execution makes Node.js even faster and more efficient.
Packages—A vast set of open-source Node.js packages is available that can simplify your work. There are more than one million packages in the NPM ecosystem today.
Strong backend—Node.js is written in C and C++, which makes it speedy and adds features like networking support.
Multi-platform—Cross-platform support allows you to create SaaS websites, desktop apps, and even mobile apps, all using Node.js.
Maintainable—Node.js is an easy choice for developers since both the frontend and backend can be managed with JavaScript as a single language.

### Market Size

There has been immense growth in websites in the last 2 decades, and as expected, Node.js is growing fast as well. The popular runtime already crossed the 1-billion download threshold back in 2018, and according to W3Techs, Node.js is used by 1.2% of all websites everywhere. That’s over 20 million total sites across the internet.

Not surprisingly, it’s a popular selection with millions of companies, too. Here are a few popular ones that use Node.js today:

- Twitter
- Spotify
- eBay
- Reddit
- LinkedIn
- Godaddy
- else

### Applications Of Node.js
Node.js is used for a wide variety of applications. Let’s explore some popular use cases where Node.js is a good choice:

- Real-time chats—Due to its single-threaded asynchronous nature, Node.js is well-suited to processing real-time communication. It can easily scale and is often used in building chatbots. Node.js also makes it simple to build additional chat features like multi-person chat and push notifications.
- Internet of Things—IoT applications usually comprise multiple sensors, as they frequently send small chunks of data that can pile into a large number of requests. Node.js is a good choice since it’s able to handle these concurrent requests quickly.
- Data streaming—Companies like Netflix use Node.js for streaming purposes. This is mainly due to Node.js being lightweight and fast, besides which Node.js provides a native streaming API. These streams allow users to pipe requests to each other, resulting in data being streamed directly to its final destination.
- Complex single-page applications (SPAs)—In SPAs, the whole application is loaded in a single page. This usually means there are a couple of requests made in the background for specific components. Node.js’s event loop comes to the rescue here, as it processes requests in a non-blocking fashion.
- REST API-based applications—JavaScript is used both in the frontend and backend of sites. Thus, a server can easily communicate with the frontend via REST APIs using Node.js. Node.js also provides packages like Express.js and Koa that make it even easier to build web applications.

source: https://kinsta.com/knowledgebase/what-is-node-js/#market-size