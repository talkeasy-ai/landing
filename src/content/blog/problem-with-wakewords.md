---
title: The problem with wake words: 3 reasons most languages are left out
date: 2026-11-24
author: Natnael W. Getahun
excerpt: "Hey Google" and Alexa skip many of the world's languages, and the tools app makers use skip even more. Here's why, and why the fix has to be open.
draft: true
---

Talking to your phone should be the easiest way to use it. No reading, no menus, no small buttons. But before a phone can help you, it has to know you're talking to it. That first step leaves out most of the world's languages.

## What is a wake word?

A wake word is the short phrase that tells your phone to start listening. "Hey Siri." "OK Google." "Alexa." In Talkeasy, it's "Hey Talkeasy".

To catch it, the phone runs a tiny listener in the background. It doesn't understand what you say. It only waits for one phrase. In Talkeasy, it runs on the phone itself, so nothing you say leaves it.

For someone who can't read the screen, this matters a lot. A wake word means you don't have to find the right button first. You just speak.

But the tiny listener has to learn that phrase first, and that's where things go wrong.

## Reason 1: Wake words only exist in a few languages

Start with the big voice assistants. Alexa comes in [17 language and country versions](https://developer.amazon.com/en-US/docs/alexa/custom-skills/develop-skills-in-multiple-languages.html), and none of them is an African language. Google's Gemini can chat in Swahili and Amharic, but [its help page](https://support.google.com/gemini/answer/14579026) says "Hey Google" voice commands aren't available in either.

And you can't borrow their wake words. "Alexa" only works on Alexa devices, and "Hey Google" only works for Google. An app like Talkeasy has to bring its own.

The tools app makers can use cover even fewer languages. One of the best known, Porcupine, supports [nine languages](https://picovoice.ai/docs/faq/porcupine/). Free, open-source tools mostly work in English only. A few work in Mandarin.

We looked hard. We found no wake word tool, free or paid, that says it supports Amharic, Tigrinya, Oromo, Somali or Swahili. Many languages from South and Southeast Asia, and the many spoken forms of Arabic, have little or no support either.

Many families speak these languages every day, at home, on the phone, across countries. If your language isn't on the list, the phone doesn't answer at all.

## Reason 2: The way wake words are taught assumes English

You might think the fix is to translate the phrase. It isn't.

To teach a phone a wake word, you need many recordings of people saying it: young and old, near and far, in quiet rooms and noisy kitchens. You also need recordings of words that *sound close* but aren't the phrase, so the phone learns not to jump at them.

We know how much those near-misses matter. Our own "Hey Talkeasy" still sometimes wakes up when someone just says "Talkeasy". It hasn't heard enough near-misses yet.

In the free tools, most of these recordings are made by computer voices, and those tools are built for English. They use English computer voices, English lists of sound-alike words, and English test recordings. Most of the code doesn't care about language. The recordings it learns from do.

For other languages, three things get in the way:

- **Too few voices.** Many languages have only one computer voice. A wake word taught by one voice struggles to hear anyone who sounds different.
- **Licences.** The computer voices that cover the most languages can only be used for non-commercial work. You can study with them, but you can't safely build a product on them.
- **Sounds nobody has tested.** Some languages use tones, or sharp "popping" consonants, like Amharic. Nobody has checked yet whether today's tools can hear those differences well.

So for many languages, the recordings that exist are too few, from too few people, or can't be used freely.

## Reason 3: Nobody checks how well it works in your language

A wake word can fail in two ways. It can ignore you when you speak, or it can wake up when nobody called it. Both are frustrating. For an older person who's still learning to trust their phone, both make them stop trusting it.

The usual way to check for false alarms is to play hours of everyday talk and count how often the phone wakes up by mistake. Those test hours are mostly English. A wake word in Hindi or Amharic, tested on English talk, can look fine on paper and still go off at the dinner table.

Until there are test recordings in each language, nobody really knows how well a wake word works for the people who speak it.

## Why the fix has to be open

We could pay for a closed wake word tool. We chose not to. For the people we build for, a wake word has to meet three promises:

- **Your language can be added.** With a closed tool, only the company decides which languages exist. With open code, anyone can teach it a new one.
- **It works with no internet.** Some paid tools check a licence key online before they start. A phone with no signal shouldn't lose its ears.
- **Nobody can switch it off.** Paid plans change. This year, one well-known wake word company [ended its free plan](https://community.home-assistant.io/t/fyi-picovoice-confirmed-free-tier-accesskeys-will-stop-working-after-june-30-2026/1012744), and people's wake words stopped working. Open code can't be taken back.

But open code is only half of it. A wake word is only as good as the voices it learned from. That's why we believe the **training data should be open and built by the community too**.

- **Real voices, not just computer ones.** Research from Google found that wake words learn best from a [mix of computer voices and real speech](https://arxiv.org/abs/2407.16840). Real people bring what computer voices miss: age, accent, a cold, a noisy street.
- **Voices like our users'.** Older voices and strong accents are exactly the ones computer voices leave out. The people who speak a language know best who is missing.
- **Given with consent, owned in common.** When people choose to record their voice for an open dataset, they know where it goes, and everyone can build on it. Nobody can lock it away later.
- **It's already working.** On Mozilla's [Common Voice](https://commonvoice.mozilla.org/), volunteers have recorded hundreds of hours of Swahili that anyone can use. But Amharic has about three hours from fewer than fifty people, and Tigrinya less than one. The model works. It needs more voices.

Open code without open data still leaves most languages out. Together, they let any community teach a phone to hear its own language.

## What we're doing about it

Talkeasy started with one grandmother who doesn't speak English. She is not rare. Many people around the world live their lives in a language their phone doesn't speak.

To be honest: today, Talkeasy's own wake word is English too. That's what we want to change.

We build on [openWakeWord](https://github.com/dscripka/openWakeWord), an open-source wake word tool, and we want to help it work in more languages. Here's our plan:

1. **Make the language swappable.** Let the teaching recordings, sound-alike words and test recordings come from any language, not just English.
2. **Test with real people early.** Before going big, check a few very different languages with real speakers, and measure how often the phone misses them or wakes up by mistake.
3. **Build the voices together.** Work with communities, universities and partners to record many real speakers, with their consent, and share those recordings openly so anyone can build on them.

The tools to run a wake word on a phone already exist. What's missing are voices, recorded with care and shared fairly. That's work we can do together.

Speak a language your phone doesn't understand? Know a group that could help record voices? [Get in touch](/contact), or follow our work on [GitHub](https://github.com/talkeasy-ai).
