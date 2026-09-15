import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Project {
  id: string;
  titleKey: string;
  descKey: string;
  stackKey: string;
  github: string;
  image: string;
}

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  projects: Project[] = [
    {
      id: 'heritage-kitchen',
      titleKey: 'PROJ_HK_TITLE',
      descKey: 'PROJ_HK_DESC',
      stackKey: 'PROJ_HK_STACK',
      github: 'https://github.com/tanimaraeliassantos/heritage-kitchen',
      image: 'showcase-heritage_kitchen.png',
    },
    {
      id: 'smart-menu',
      titleKey: 'PROJ_SM_TITLE',
      descKey: 'PROJ_SM_DESC',
      stackKey: 'PROJ_SM_STACK',
      github: 'https://github.com/tanimaraeliassantos/smart-menu-front',
      image: 'showcase-smart_menu.png',
    },
    {
      id: 'astroreserva',
      titleKey: 'PROJ_AR_TITLE',
      descKey: 'PROJ_AR_DESC',
      stackKey: 'PROJ_AR_STACK',
      github: 'https://github.com/tanimaraeliassantos/reto-daw-eventos',
      image: 'showcase-astroreserva.png',
    },
    {
      id: 'school-of-sorcery',
      titleKey: 'PROJ_SOS_TITLE',
      descKey: 'PROJ_SOS_DESC',
      stackKey: 'PROJ_SOS_STACK',
      github: 'https://github.com/tanimaraeliassantos/school-of-sorcery',
      image: 'showcase-school_sorcery.gif',
    },
    {
      id: 'flight-mood-board',
      titleKey: 'PROJ_FMB_TITLE',
      descKey: 'PROJ_FMB_DESC',
      stackKey: 'PROJ_FMB_STACK',
      github: 'https://github.com/tanimaraeliassantos/flight-mood-board',
      image: 'showcase-flightmood_board_app.gif',
    },
    {
      id: 'myflix',
      titleKey: 'PROJ_MF_TITLE',
      descKey: 'PROJ_MF_DESC',
      stackKey: 'PROJ_MF_STACK',
      github: 'https://github.com/tanimaraeliassantos/myFlix-client',
      image: 'myflix-react-showcase.gif',
    },
    {
      id: 'webdevmeetup',
      titleKey: 'PROJ_WDM_TITLE',
      descKey: 'PROJ_WDM_DESC',
      stackKey: 'PROJ_WDM_STACK',
      github: 'https://github.com/tanimaraeliassantos/webdevmeetup',
      image: 'showcase_webdevmeetup-app.gif',
    },
    {
      id: 'dev-chat-app',
      titleKey: 'PROJ_CHAT_TITLE',
      descKey: 'PROJ_CHAT_DESC',
      stackKey: 'PROJ_CHAT_STACK',
      github: 'https://github.com/tanimaraeliassantos/DEV-chat-app',
      image: 'showcase-dev_chat_app.gif',
    },
  ];
}
