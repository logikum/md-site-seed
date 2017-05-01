# md-site-seed

This project is an application skeleton for a typical `md-site-engine` web site.
You can use it to quickly start your `md-site-engine` projects and development
environment for these projects.

The seed contains a sample `md-site-engine` application and it uses the default
configuration to launch an instant web site development. The seed application
doesn't do much, just shows how to put together contents, components, controls
and public resources to create a web site. It also presents a custom `marked`
renderer.

### Getting started

To get you started you can simply clone the `md-site-engine` repository and
install the dependencies:

#### Prerequisites

You need git to clone the `md-site-engine` repository. You can get git from
[here](https://git-scm.com/).

You must have Node.js and its package manager (npm) installed. You can get them
from [here](https://nodejs.org/).

#### Clone md-site-seed

Clone the `md-site-engine` repository using git:

```
git clone https://github.com/logikum/md-site-engine.git
cd angular-seed
```

If you just want to start a new project without the `md-site-engine` commit
history then you can do:

```
git clone --depth=1 https://github.com/logikum/md-site-engine.git <your-project-name>
cd angular-seed
```

The depth=1 tells git to only pull down one commit worth of historical data.

#### Install Dependencies

The project hase some kinds of dependencies and you can simply install it:

```
npm install
```

#### Run the Application

The simplest way to start the server is:

```
node server.js
```

Now browse to the application at [localhost:3000](http://localhost:3000).

### Directory Layout

```
<your-project-name>/    => all of the source files of the application
    components/         => the place of additional page elements
        en/                 => 1. language specific components
        hu/                 => 2. language specific components
    config/             => application configuration and marked renderer
    contents/           => the place of the contents (empty)
        en/                 => 1. language specific contents
        hu/                 => 2. language specific contents
    controls/           => the place of server side scripts
    node_modules/       => the place of dependencies
    public/             => all client side files of the application
        fonts/              => fonts
        images/             => images
        scripts/            => client side scripts
        styles/             => style sheets
```
