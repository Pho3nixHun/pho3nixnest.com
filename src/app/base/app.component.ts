import { Component } from '@angular/core';
import { GistService } from 'app/gist.service/gist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private GistSrv: GistService) {
    this.GistSrv = GistSrv;
    this.loadArticle('897a8484553e0942f2d9884545aeb10a');
    console.log(this);
  }
  loadArticle(id) {
    this.GistSrv.article(id)
    .then(
        ({ content, meta }) => {
            this.article = {
                content,
                meta
            }
        },
        (reason) => {
            console.warn(reason);
        })
    .catch(err => console.error(err));
  }
  article = {}
  socialLinks = [
        {
            label: 'GitHub',
            icon: 'githubalt',
            disabled: false,
            selected: false,
            link: 'https://github.com/Pho3nixHun'
        },
        {
            label: 'LinkedIn',
            icon: 'linkedin',
            disabled: false,
            selected: false,
            click: (sender, $event) => { },
            link: 'https://www.linkedin.com/in/laci-simon-53ba1a69/'
        },
        {
            label: 'Facebook',
            icon: 'facebook',
            disabled: true,
            selected: false,
            click: (sender, $event) => { },
            link: ''
        },
        {
            label: 'Twitter',
            icon: 'twitterbird',
            disabled: false,
            selected: false,
            click: (sender, $event) => { },
            link: 'https://twitter.com/Pho3nixhun'
        },
        {
            label: 'Spotify',
            icon: 'spotify',
            disabled: true,
            selected: false,
            click: (sender, $event) => { },
            link: ''
        },
        {
            label: 'YouTube',
            icon: 'youtube',
            disabled: true,
            selected: false,
            click: (sender, $event) => { },
            link: ''
        },
        {
            label: 'E-mail',
            icon: 'email',
            disabled: false,
            selected: false,
            click: (sender, $event) => { },
            link: 'mailto:pho3nix@outlook.hu'
        },
        {
            label: 'Skype',
            icon: 'skype',
            disabled: false,
            selected: false,
            click: (sender, $event) => { },
            link: 'skype:simi_hun'
        },
        {
            label: 'Share this page',
            icon: 'sharethis',
            disabled: true,
            selected: false,
            click: (sender, $event) => { },
            link: ''
        }
    ];
    menuItems = [
        {
            text: 'What\'s hot?',
            icon: 'whatshot', // rss_feed
            iconClass: 'material-icons',
            disabled: false,
            selected: true,
            click: (sender, $event) => { },
            link: ''
        }/*,
        {
            text: 'Technical Tales',
            icon: 'import_contacts', // import_contacts
            iconClass: 'material-icons',
            disabled: false,
            selected: false,
            click: (sender, $event) => { },
            link: ''
        },
        {
            text: 'What Grinds My Gears',
            icon: 'settings',
            iconClass: 'material-icons',
            disabled: false,
            selected: false,
            click: (sender, $event) => { },
            link: ''
        },
        {
            text: 'whoami',
            icon: 'help_outline',
            iconClass: 'material-icons',
            disabled: false,
            selected: false,
            click: (sender, $event) => { },
            link: ''
        }*/
    ];
}
