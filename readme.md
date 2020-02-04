<p align="center">
	<img src="patroclus.gif" />
	<br />
	<img src="patroclus.png" />
</p>

> Even though twenty such as you (probably referring to distracting things on the internet) had come in against me, they would all have been broken beneath my spear

## Why?

The internet can be a beautiful place. It can be a place where knowledge and information are exchanged openly and freely. It allows us to instantly communicate with fellow humans the world across. We can form communities without physical borders!

Sadly, there is always a meme site, a game, or a thrilling conversation taking place to distract you from the objective task at hand. Sometimes you want to work, but you are too weak to abstain from the allure of gifs and depressing news.

Patroclus watches your internet traffic and gives you a friendly nudge to stay on task. He never prevents, interferes, or tattles. He just sticks by your side to motivate you.

## Usage

*Note: Patroclus has only been built and tested with macOS 10.15.2 - It may work elsewhere, just a HEADS UP!*

### Permissions

Permission is necessary to monitor network traffic. In order for Patroclus to keep a watchful eye
on your internet activities, he will need permission - much like a real friend!

You can execute Patroclus with `sudo` or loosen up permissions on your network interface. If you are on macOs, this might
look like this:

```
$ sudo chmod o+r /dev/bpf*
```

This will allow reading of the [Berkley Packet Filter](https://en.wikipedia.org/wiki/Berkeley_Packet_Filter), and is just
what Patroclus needs.

`sudo` and opening up the BPF might be a cause of some consternation, but hopefuly Patroclus' open source nature will allay
the fears of many.

## Building

Install Node dependencies:

    npm install

### Development

    clojure -A:dev
	
If you are using [CIDER](https://github.com/clojure-emacs/cider) for development, you should be able to leverage `cider-jack-in-clojurescript` as normal. The included `.dir-locals.el` should be configured to allow things to just work.

### Release

    clojure -A:main
    clojure -A:renderer
    npm run package

### Run tests from command line

    clojure -A:test
