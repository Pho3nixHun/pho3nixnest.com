import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from 'app/base/app.component';
import { SidebarComponent } from 'app/sidebar/sidebar.component';
import { AnchormapComponent } from 'app/anchormap/anchormap.component';
import { ArticleComponent } from 'app/article/article.component';
import { ArticleInfoComponent } from 'app/article-info/articleinfo.component';
import { HeaderComponent } from 'app/header/header.component';
import { ButtonGroup } from 'app/buttonGroup/buttonGroup.component';
import { GistService } from 'app/gist.service/gist.service';

@NgModule({
  declarations: [
    AppComponent, AnchormapComponent, SidebarComponent, ArticleComponent, HeaderComponent, ButtonGroup, ArticleInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
