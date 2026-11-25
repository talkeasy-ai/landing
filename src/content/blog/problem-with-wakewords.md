---
title: The problem with wake words: 3 reasons most languages are left out
date: 2026-11-24
author: Natnael W. Getahun
excerpt: I taught a phone to hear "Hey Talkeasy" in English. Then I asked how to do it in my grandmother's language, and found that almost nobody can. Here's why, and why the fix has to be open.
draft: true
---

A few weeks ago, I taught a phone to hear two words: "Hey Talkeasy". Soon after it first worked, I asked a simple question: could I do the same in my grandmother's language?

The answer surprised me. For most of the world's languages, almost nobody can. This post is about why.

## What is a wake word?

A wake word is the short phrase that tells your phone to start listening. "Hey Siri." "OK Google." "Alexa." In Talkeasy, it's "Hey Talkeasy".

To catch it, the phone runs a tiny listener in the background. It doesn't understand what you say. It only waits for one phrase. In Talkeasy, it runs on the phone itself, so nothing you say leaves it.

For someone who can't read the screen, this matters a lot. A wake word means you don't have to find the right button first. You just speak.

But the tiny listener has to learn that phrase first, and that's where things go wrong.

## How I taught a phone to hear "Hey Talkeasy"

We didn't start with open source. We first tried a paid wake word tool. It needed a licence key, it didn't fit well with the rest of our app, and underneath, it was built on a free, open-source tool anyway. So we switched to the open-source tool directly.

Teaching it our own phrase was the easy part. You type the words, and computer voices say them over and over until the phone learns them.

Testing was where I learned the most:

- **It heard me through noise.** It caught my voice with a loud film playing, and the film never fooled it.
- **But it woke up for half the phrase.** Sometimes just "Talkeasy" or "Hey" was enough. It hadn't learned that half the phrase isn't the phrase.
- **Other people's voices taught it the most.** We wanted Talkeasy to answer only its owner. It couldn't tell voices apart until it had heard many *other* people say "Hey Talkeasy" too.
- **The licences had fine print.** Some of the free building blocks could only be used for non-commercial work. Free to try isn't the same as free to share.

All of this was in English, the best-supported language there is. It works, but it took a lot of testing, and it still isn't perfect.

So when I asked about my grandmother's language, Amharic, I expected it to be harder. I didn't expect it to be close to impossible.

## Reason 1: Wake words only exist in a few languages

The big voice assistants only answer in some languages, and many of the world's languages aren't among them. You also can't borrow their wake words. "Alexa" only works for Alexa, and "Hey Google" only works for Google. An app like Talkeasy has to bring its own.

The tools app makers can use cover even fewer languages. Paid ones support a short list of the world's biggest languages. Free, open-source ones mostly work in English.

Many languages spoken across Africa, South and Southeast Asia, and the Arab world have little or no support. Amharic, my grandmother's language, is one of them.

Many families speak these languages every day, at home, on the phone, across countries. If your language isn't on the list, the phone doesn't answer at all.

## Reason 2: The way wake words are taught assumes English

You might think the fix is to translate the phrase. It isn't.

To teach a phone a wake word, you need many recordings of people saying it: young and old, near and far, in quiet rooms and noisy kitchens. You also need recordings of words that *sound close* but aren't the phrase, so the phone learns not to jump at them. That's what "Hey Talkeasy" was missing when it woke up for "Talkeasy".

Most of the free tools were built around English. Their computer voices, their lists of sound-alike words and their tests are all English. The tool can listen in any language. What it learns from can't.

For other languages, three things get in the way:

- **Too few voices.** English has many computer voices to learn from. Many languages have only one, or none. A wake word taught by one voice struggles to hear anyone who sounds different.
- **Licences.** Many of the voices and recordings that do exist can't be used to build a product. I hit that wall even in English.
- **Sounds nobody has tested.** Some languages use tones, or sharp "popping" consonants, like Amharic. Nobody really knows yet how well today's tools hear those differences.

So for many languages, the recordings that exist are too few, from too few people, or can't be used freely.

## Reason 3: Nobody checks how well it works in your language

A wake word can fail in two ways. It can ignore you when you speak, or it can wake up when nobody called it. Both are frustrating. For an older person who's still learning to trust their phone, both make them stop trusting it.

The usual way to check is to play lots of everyday talk and count how often the phone wakes up by mistake. That everyday talk is mostly English. A wake word in Hindi or Amharic, checked against English, can look fine on paper and still go off at the dinner table.

Even in English, my own tests were small. A real test needs many real people. In most languages, there isn't even a small one.

## Why the fix has to be open

We could pay for a closed wake word tool. We chose not to. For the people we build for, a wake word has to keep three promises:

- **Your language can be added.** With a closed tool, only the company decides which languages exist. With open code, anyone can teach it a new one, the way I taught it "Hey Talkeasy".
- **It works with no internet.** A licence key that has to be checked online shouldn't stand between someone and their phone.
- **Nobody can switch it off.** Paid plans change, and when they do, people's wake words can stop working. Open code can't be taken back.

But open code is only half of it. A wake word is only as good as the voices it learned from. That's why we believe the **training data should be open and built by the community too**.

- **Real voices, not just computer ones.** Real people bring what computer voices miss: age, accent, a cold, a noisy street. I saw it myself: Talkeasy only learned to know its owner's voice once it had heard other people say the phrase.
- **Voices like our users'.** Older voices and strong accents are exactly the ones computer voices leave out. The people who speak a language know best who is missing.
- **Given with consent, owned in common.** When people choose to record their voice for an open collection, they know where it goes, and everyone can build on it. Nobody can lock it away later, or attach fine print to it.
- **It already works.** Volunteers around the world already record their voices for open projects anyone can use. Some languages have plenty. Many still have almost none.

Open code without open data still leaves most languages out. Together, they let any community teach a phone to hear its own language.

## What we're doing about it

Talkeasy started with my grandmother, who doesn't speak English. She is not rare. Many people around the world live their lives in a language their phone doesn't speak.

To be honest: today, Talkeasy's own wake word is English too. That's what we want to change. Here's our plan:

1. **Make the language swappable.** Let the voices, sound-alike words and tests come from any language, not just English.
2. **Test with real people early.** Before going big, try a few very different languages with real speakers, and see how often the phone misses them or wakes up by mistake.
3. **Build the voices together.** Work with communities, universities and partners to record many real speakers, with their consent, and share those recordings openly so anyone can build on them.

Even in English, with everything already built for me, getting a wake word I'd trust took a lot of work. The tools to run one on a phone already exist. What's missing for most languages are the voices, recorded with care and shared fairly. That's work we can do together.

Speak a language your phone doesn't understand? Know a group that could help record voices? [Get in touch](/contact), or follow our work on [GitHub](https://github.com/talkeasy-ai).
