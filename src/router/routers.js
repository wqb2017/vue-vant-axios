import home from './home';
import classify from './classify';
import release from './release';
import news from './news';
import mine from './mine';
import service from './service';
import notfound from './404';

export default [
  {
    path: '*',
    redirect: '404/entry'
  },
  {
    path: '/',
    redirect: 'home/entry'
  }
].concat(home, classify, release, news, mine, service, notfound);
