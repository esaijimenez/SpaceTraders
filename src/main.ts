import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SpaceTradersModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(SpaceTradersModule)
  .catch(err => console.error(err));
