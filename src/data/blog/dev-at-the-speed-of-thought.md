---
pubDatetime: 2026-03-14T12:00:00Z
title: Dev at the speed of thought
featured: true
draft: false
tags:
  - codex
  - blog
description: Using coding agents in 2026
---

## 2024 - just two years, but a lifetime ago

You're building something, you're in the flow, and you get an idea. Maybe it's a new feature you're trying to add to a personal project. It's attractive, worth researching and considering. You write it as a small note or TODO in your list (wherever you maintain it). The excitement and the nuance of the thought that is alive right now cannot be fully captured in that short note. You need a few hours to research it, and today is not that day. You cannot do everything today. You want to do so much, yet the physical and mental capacities you have as a human restrict what all can be achieved today. You move on, half of the idea (the excitement) dies immediately and the other half is buried for now.

<img src="/images/2024-workflow.png" alt="Diagram showing the 2024 developer workflow: Idea (right now) → Research (a week later) → Execution (two weeks later) → Done (1 month later). Total working time: ~10-12 hours, total time to production: ~1 month." class="mx-auto my-6 rounded-lg shadow-md" />

Another example from work - You create a tracking Jira ticket, GitHub issue, or add a TODO to the list. Mostly I would maintain my own TODOs, since that was the quickest way to record something - Jira is abysmally slow in its UI. At least 2 minutes to fill out all the required fields in the Jira UI 😓 just to file a ticket. For understanding any gaps (research), you need to Slack a coworker. Or set up a Zoom call to block someone's calendar. Tedious work just to get to the goal of implementing a feat/fix.

## Bye 2024, hello 2026

You can spin up a coding agent - codex, claude, opencode, whatever you use. Instead of noting down the idea in your TODO list, give it to the agent and ask if it's a good idea. If your repository is already set up correctly (AGENTS.md, docs/\*, .agents/skills), then it will be able to research the topic, consider how it fits into your project, check if it aligns with your design principles, and suggest the way to implement it. Keep the spark of the idea alive, and within an hour, you have prod-ready code already in the test pipeline, which the agent wrote as well obviously.

<img src="/images/2026-workflow.png" alt="Diagram illustrating the 2026 agent-powered development workflow: Idea → Research (1 min) → Execution (10 min) → Done (1 hour). Total time from thought to production: ~1-2 hours." class="mx-auto my-6 rounded-lg shadow-md" />

In 2026, you don't need to create tickets for yourself. The ticket tracking systems like Jira/Linear are a relic from a time when you could not immediately implement/close a task. The amount of unnecessary red tape involved in these systems is incomprehensible to me today:

- Creating a ticket.
- Filling required fields, marking priority.
- Adding descriptions.
- Assigning to teammates/yourself.
- Commenting and linking them to PRs.
- Closing tickets with status and release versions.

Would you rather spend your time building or updating tickets?

People focus on how coding agents make you 10x faster. Something that takes 10 hours can now be done in 1 hour (not a joke, this is true and felt by every person who's tried codex/claude or anything equally powerful). But actually, they make you 10-100x faster in terms of how soon you get to the final output. As a builder, time to production for an idea is now compressed beyond belief.

How is this possible? Let's talk about two invisible but sizable costs developers pay every day in this industry.

1. Context switching, and
2. Human coordination/alignment

## Context switching

Context switching has been a necessary skill and pain in this industry.

- You never have just one idea, you have many.
- You need to work with multiple people on projects.

An example - You are working on a task. Midway, a Slack ping: "prod issue, pls join the customer call". Pause the first task, and offload context quickly. You need to go in with a blank slate to deal with the new topic. An hour later, you return... and spend 10 minutes just remembering where you were on the first task.

This is context switching, and it comes at a personal energy and team velocity cost. If you're working alone, you only deal with the first point. Frequent context switching is unnecessarily draining and not optimal. Humans are single-threaded. We can focus on only one topic at a time. Our short-term memory serves as a scratchpad to allow context switching, but this is an invisible cost we are accustomed to paying every day.

## Human coordination/alignment

The second one is bigger. The bigger the team, the more spread out the tasks and the greater the need for alignment. This is like context switching, but across multiple people. You drive your task to a reasonable conclusion before handing it off to the next person who is supposed to align themselves to your latest work and then proceed forward with their input. And repeat.

This materialises visibly in the following real-world example - if everyone is working on their own Git branches, and a common branch serves as the source of truth. Pulling someone else's changes causes merge conflicts, and we need to spend time resolving them. The more the branches, the more frequently you're resolving merge conflicts, and more of your time is spent just doing that.

Coordination costs are not linear, they grow quickly with people.

- In a team of one, you already hold all the context, no coordination required.
- In a team of 2, you need one communication channel.
- In a team of 3, you need **three** communication channels (DMs exist, nothing ever is 100% there in a group chat).
- In a team of 5, you need 10 communication channels.

And most of this coordination is not written down. It can show up as quick calls, in-person discussions, or impromptu chats over lunch/tea.

You’re not just building the product. You’re constantly syncing mental states across people.

<img src="/images/coordination-costs-diagram.png" alt="Diagram illustrating context switching and coordination costs" class="mx-auto my-6 rounded-lg shadow-md" />

## Here's the antidote, but don't poison yourself more by mistake

Thanks to Codex, I can now avoid both of these costs. And I find that people may be making matters worse due to AI. Running 10+ agents in parallel and switching between them quickly is probably not the way. Any person who's tried it knows how painful it is. I don't see the advantage in sending a message to one agent, then switching tabs to prompt the next and so on. The first agent is more often than not done processing much before the time you can return to it. The latest improvements in inference speeds and overall latency are just another point in favour of not running multiple agents together. I find that the bottleneck is my own thinking and understanding of the path forward, rather than the agent spending time researching and implementing.

My preferred workflow is now:

1. picking one idea
2. discussing/researching it with the agent
3. implementing it via the agent

Keep your life simple. One agent chat at a time, and small teams. Don't introduce red tape, don't overcomplicate what you need to do. Sleep on time and don't think about work after 6 pm. In a world where artificial intelligence is abundant, keep your real intelligence and energy reserved for high-value tasks and take breaks regularly. Enjoy building!
