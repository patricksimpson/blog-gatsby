---
title: 'dizzee for emacs'
summary: 'Just a little quick post about dizzee for emacs project management'
date: '2018-06-29'
tags: ["emacs", "tech", "prgramming"]
---

I needed a way to run multiple applications at the same time that didn't involve opening multiple terminal sessions. 

Queue [Dizzee](https://github.com/davidmiller/dizzee)

## Dizzee 

This small little emacs package enables you to setep projects, with specific commands to run without leaving emacs.

First you want to install dizzee ([via melpa](https://melpa.org/#/dizzee)): 

In your emacs settings file `settings.el` 

```
(use-package dizzee
  :ensure t
  :config (progn
    (defvar dz-projects "~/dotfiles/emacs/dz-projects.el")
    (if (file-exists-p dz-projects)
    (load-file dz-projects)))
)
```

A project is defined in your `dz-projects.el` file such as: 

```
(dz-defservice cool-project-client "npm"
                        :args ("run" "serve")
                        :cd "/Users/patrick/github/cool-project-client")
```

and say you want a project running a server...

```
(dz-defservice cool-project-server "rails"
                        :args ("server" "-p" "3001")
                        :cd "/Users/patrick/github/cool-project-server")
```

What dizzee does is start these processes within emacs, lets you start/stop these servers without leaving Emacs.

Now you could setup keybinds (or a hyrdra) to launch your applications!
