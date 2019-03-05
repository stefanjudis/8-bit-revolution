# 8-bit-revolution

> aka "How to send text messages from your static site using [Netlify](https://www.netlify.com/), [Twilio](https://www.twilio.com/) and serverless functions

Tell your friends how much you like 8-bit via text (SMS or WhatsApp)... every day! As much as you want!

![Website of 8-bit-revolution including "spread the word" and a "send messages button](./screenshot.jpg)

## How does this work?

Using serverless functions you can build all the HTTP endpoints you need to power your static sites (finally!!!). This example site uses Netlify Lambda functions to send messages to all of your friends using the Twilio API. Thanks to the usage of function your authorization token won't be exposed and it's save to use Twilio.

## Setup

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/stefanjudis/8-bit-revolution)

To set this project up yourself you can hit the button (👆) which leads you to a one-click install solution. What you need is a Twilio account and number and the numbers of your friends.

![Netlify setup dialog](./setup.jpg)

<dl>
  <dt>Repository name</dt>
  <dd>Given name of the new repository which will be created in your GitHub account. </dd>

  <dt>Twilio Account SID</dt>
  <dd>You'll find your account sid in [your Twilio console](https://www.twilio.com/console).</dd>

  <dt>Twilio auth token</dt>
  <dd>You'll find your auth token in [your Twilio console](https://www.twilio.com/console).</dd>

  <dt>Bot number</dt>
  <dd>The number you bot which should send messages e.g. `+4911111111111`</dd>

  <dt>Message</dt>
  <dd>The message you want to spread and send your friends e.g. `8-bit rocks`</dd>

  <dt>The numbers that should receive the message</dt>
  <dd>A semi-colon seperated list of phone numbers e.g. `+491234567890;+490987654321`</dd>
</dl>

Ooooooor... you can watch me setting it up in real time! 🙈 (TODO how long did it take)

TODO youtube video!

## Learn more

You can find out more on how this is done by reading the tutorial on [twilio.com-TODO](...).
