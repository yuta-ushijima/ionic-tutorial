/*別ファイルオブジェクトの読み込み
 アプリを起動するためのモジュール読み込み
*/
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
