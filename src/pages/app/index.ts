import Header from '../../components/header';
import Page from '../../core/templates/page';
import MainPage from '../main';
import SettingsPage from '../settings/index';
import StatisticsPage from '../statistics/index';

export const enum PageIdes {
  MainPage = 'main-page',
  SettingsPage = 'settings-page',
  StatisticsPage = 'statistics-page',
}

class App {
  private static container: HTMLElement = document.body;
  private static defaultPageId: string = 'current-page';
  private initialPage: MainPage;
  private header: Header;

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    switch (idPage) {
      case PageIdes.MainPage:
        page = new MainPage(idPage);
        const pageRenderMain = page.render();
        App.container.append(pageRenderMain);
        return (pageRenderMain.id = App.defaultPageId);
      case PageIdes.SettingsPage:
        page = new SettingsPage(idPage);
        const pageRenderSettings = page.render();
        App.container.append(pageRenderSettings);
        return (pageRenderSettings.id = App.defaultPageId);
      case PageIdes.StatisticsPage:
        page = new StatisticsPage(idPage);
        const pageRenderStatistic = page.render();
        App.container.append(pageRenderStatistic);
        return (pageRenderStatistic.id = App.defaultPageId);
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  constructor() {
    this.initialPage = new MainPage('main-page');
    this.header = new Header('header', 'header');
  }

  run() {
    App.container.append(this.header.render());
    App.renderNewPage('main-page');
    this.enableRouteChange();
  }
}

export default App;
