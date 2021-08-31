import Component from '../../core/templates/components';
import { PageIdes } from '../../pages/app';

const Buttons = [
  {
    id: PageIdes.MainPage,
    text: 'Main Page',
  },
  {
    id: PageIdes.SettingsPage,
    text: 'Settings Page',
  },
  {
    id: PageIdes.StatisticsPage,
    text: 'Statistics Page',
  },
];

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPageButtons() {
    const pageButtons = document.createElement('div');
    Buttons.forEach(btn => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${btn.id}`;
      buttonHTML.innerHTML = btn.text;
      pageButtons.append(buttonHTML);
    });
    this.container.append(pageButtons);
  }

  render() {
    this.renderPageButtons();
    return this.container;
  }
}

export default Header;
