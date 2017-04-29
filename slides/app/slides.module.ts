import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbsoluteLayout } from 'ui/layouts/absolute-layout';
import { StackLayout } from 'ui/layouts/stack-layout';
import { Label } from 'ui/label';

import { SlidesComponent } from './slides/slides.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
    imports: [CommonModule],
    exports: [SlideComponent, SlidesComponent],
    declarations: [SlidesComponent, SlideComponent],
    providers: [],
})
class SlidesModule {}
export {SlidesModule, SlideComponent, SlidesComponent}