import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-cookie-consent';

  cookieMessage = `Nosso website coleta informações do seu dispositivo e da sua navegação
   por meio de cookies para permitir funcionalidades como: melhorar o funcionamento
    técnico das páginas, mensurar a audiência do website e oferecer produtos e
     serviços relevantes por meio de anúncios personalizados.
     Para saber mais sobre as informações e cookies, acesse nossa`;
  cookieDismiss = 'Aceitar';
  cookieLinkText = 'Polítca de Privacidade';
  politicaCookieLink = 'https://google.com';

  ngOnInit() {
    let cc = window as any;
       cc.cookieconsent.initialise({
         palette: {
           popup: {
             background: "#164969"
           },
           button: {
             background: "#ffe000",
             text: "#164969"
           }
         },
         theme: "classic",
         content: {
           message: this.cookieMessage,
           dismiss: this.cookieDismiss,
           link: this.cookieLinkText,
           href: this.politicaCookieLink
         }
       });
  }
}

//Pegar o valor da resposta do botão ACEITAR - cookieconsent_status


