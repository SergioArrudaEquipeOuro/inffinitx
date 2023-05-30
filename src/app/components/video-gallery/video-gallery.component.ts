import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Lesson {
  title: string;
  videoUrl: string;
}


@Component({
  selector: 'app-video',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent {
 
  selectedModule: string = '';
  selectedLesson: Lesson | null = null;
  isVideoOpen: boolean = false;


  
  module1Lessons: Lesson[] = [
    { title: 'Aula 01', videoUrl: 'https://rumble.com/embed/v261gfa/?pub=253wa8' },
    { title: 'Aula 02', videoUrl: 'https://rumble.com/embed/v262p7i/?pub=253wa8' },
    { title: 'Aula 03', videoUrl: 'https://rumble.com/embed/v262rc0/?pub=253wa8' },
    { title: 'Aula 04', videoUrl: 'https://rumble.com/embed/v262um2/?pub=253wa8' },
    { title: 'Aula 05', videoUrl: 'https://rumble.com/embed/v2780o8/?pub=253wa8' },
    { title: 'Aula 06', videoUrl: 'https://rumble.com/embed/v2781fg/?pub=253wa8' },
    { title: 'Aula 07', videoUrl: 'https://rumble.com/embed/v2781yw/?pub=253wa8' },
    { title: 'Aula 08', videoUrl: 'https://rumble.com/embed/v2782z0/?pub=253wa8' },
    { title: 'Aula 09', videoUrl: 'https://rumble.com/embed/v2784ey/?pub=253wa8' },
    { title: 'Aula 10', videoUrl: 'https://rumble.com/embed/v27865q/?pub=253wa8' },
    { title: 'Aula 11', videoUrl: 'https://rumble.com/embed/v2788fo/?pub=253wa8' },
  ];
  module2Lessons: Lesson[] = [
    { title: 'Aula 01', videoUrl: 'https://rumble.com/embed/v2789vc/?pub=253wa8' },
    { title: 'Aula 02', videoUrl: 'https://rumble.com/embed/v278a7u/?pub=253wa8' },
    { title: 'Aula 03', videoUrl: 'https://rumble.com/embed/v278am0/?pub=253wa8' },
    { title: 'Aula 04', videoUrl: 'https://rumble.com/embed/v278c78/?pub=253wa8' },
    { title: 'Aula 05', videoUrl: 'https://rumble.com/embed/v278cxc/?pub=253wa8' }, 
    { title: 'Aula 06', videoUrl: 'https://rumble.com/embed/v278eqc/?pub=253wa8' },
    { title: 'Aula 07', videoUrl: 'https://rumble.com/embed/v278f7u/?pub=253wa8' },
  ];
   module3Lessons: Lesson[] = [
    { title: 'Aula 01', videoUrl: 'https://rumble.com/embed/v278fm0/?pub=253wa8' },
    { title: 'Aula 02', videoUrl: 'https://rumble.com/embed/v278g4m/?pub=253wa8' },
    { title: 'Aula 03', videoUrl: 'https://rumble.com/embed/v278h6o/?pub=253wa8' },
    { title: 'Aula 04', videoUrl: 'https://rumble.com/embed/v278kes/?pub=253wa8' },
    { title: 'Aula 05', videoUrl: 'https://rumble.com/embed/v278nmc/?pub=253wa8' },
  ];
  module4Lessons: Lesson[] = [
    { title: 'Aula 01', videoUrl: 'https://rumble.com/embed/v27ads4/?pub=253wa8' },
    { title: 'Aula 02', videoUrl: 'https://rumble.com/embed/v27aebu/?pub=253wa8' },
    { title: 'Aula 03', videoUrl: 'https://rumble.com/embed/v27afeq/?pub=253wa8' },
    { title: 'Aula 04', videoUrl: 'https://rumble.com/embed/v27afuu/?pub=253wa8' },
    { title: 'Aula 05', videoUrl: 'https://rumble.com/embed/v27afza/?pub=253wa8' },
    { title: 'Aula 06', videoUrl: 'https://rumble.com/embed/v27agka/?pub=253wa8' },
    { title: 'Aula 07', videoUrl: 'https://rumble.com/embed/v27agt0/?pub=253wa8' },
    { title: 'Aula 08', videoUrl: 'https://rumble.com/embed/v27agyk/?pub=253wa8' },
    { title: 'Aula 09', videoUrl: 'https://rumble.com/embed/v27ah58/?pub=253wa8' },
    { title: 'Aula 10', videoUrl: 'https://rumble.com/embed/v27ahai/?pub=253wa8' },
    { title: 'Aula 11', videoUrl: 'https://rumble.com/embed/v27ahk8/?pub=253wa8' },
    { title: 'Aula 12', videoUrl: 'https://rumble.com/embed/v27ahq2/?pub=253wa8' },
    { title: 'Aula 13', videoUrl: 'https://rumble.com/embed/v27ahz8/?pub=253wa8' },
    { title: 'Aula 14', videoUrl: 'https://rumble.com/embed/v27aim0/?pub=253wa8' },
    { title: 'Aula 15', videoUrl: 'https://rumble.com/embed/v27aj06/?pub=253wa8' },
  ];
  module5Lessons: Lesson[] = [
    { title: 'Aula 01', videoUrl: 'https://rumble.com/embed/v27aj4m/?pub=253wa8' },
    { title: 'Aula 02', videoUrl: 'https://rumble.com/embed/v27ajc4/?pub=253wa8' },
    { title: 'Aula 03', videoUrl: 'https://rumble.com/embed/v27akdk/?pub=253wa8' },
    { title: 'Aula 04', videoUrl: 'https://rumble.com/embed/v27akwg/?pub=253wa8' },
    { title: 'Aula 05', videoUrl: 'https://rumble.com/embed/v27am9c/?pub=253wa8' },
    { title: 'Aula 06', videoUrl: 'https://rumble.com/embed/v27annc/?pub=253wa8' },
    { title: 'Aula 07', videoUrl: 'https://rumble.com/embed/v27aog8/?pub=253wa8' },
    { title: 'Aula 08', videoUrl: 'https://rumble.com/embed/v27aou4/?pub=253wa8' },
    { title: 'Aula 09', videoUrl: 'https://rumble.com/embed/v27apu8/?pub=253wa8' },
    { title: 'Aula 10', videoUrl: 'https://rumble.com/embed/v27b7yi/?pub=253wa8' },
    { title: 'Aula 11', videoUrl: 'https://rumble.com/embed/v27b8va/?pub=253wa8' },
    { title: 'Aula 12', videoUrl: 'https://rumble.com/embed/v27b9u0/?pub=253wa8' },
  ];
  module6Lessons: Lesson[] = [
    { title: 'Aula 01', videoUrl: 'https://rumble.com/embed/v27ba72/?pub=253wa8' },
    { title: 'Aula 02', videoUrl: 'https://rumble.com/embed/v27bafe/?pub=253wa8' },
    { title: 'Aula 03', videoUrl: 'https://rumble.com/embed/v27bam2/?pub=253wa8' },
    { title: 'Aula 04', videoUrl: 'https://rumble.com/embed/v27bb0i/?pub=253wa8' },
    { title: 'Aula 05', videoUrl: 'https://rumble.com/embed/v27bem8/?pub=253wa8' },
    { title: 'Aula 06', videoUrl: 'https://rumble.com/embed/v27bbvm/?pub=253wa8' },
    { title: 'Aula 07', videoUrl: 'https://rumble.com/embed/v27bd6k/?pub=253wa8' },
  ];
  module7Lessons: Lesson[] = [
    { title: 'Aula 01', videoUrl: 'https://rumble.com/embed/v27bhio/?pub=253wa8' },
    { title: 'Aula 02', videoUrl: 'https://rumble.com/embed/v27biec/?pub=253wa8' },
    { title: 'Aula 03', videoUrl: 'https://rumble.com/embed/v27bjic/?pub=253wa8' },
    { title: 'Aula 04', videoUrl: 'https://rumble.com/embed/v27bkf4/?pub=253wa8' },
    { title: 'Aula 05', videoUrl: 'https://rumble.com/embed/v27bkvi/?pub=253wa8' },
    { title: 'Aula 06', videoUrl: 'https://rumble.com/embed/v27blbc/?pub=253wa8' },
  ];
  module8Lessons: Lesson[] = [
    { title: 'Aula 01', videoUrl: 'https://rumble.com/embed/v27blz8/?pub=253wa8' },
    { title: 'Aula 02', videoUrl: 'https://rumble.com/embed/v27br70/?pub=253wa8' },
    { title: 'Aula 03', videoUrl: 'https://rumble.com/embed/v27broi/?pub=253wa8' },
    { title: 'Aula 04', videoUrl: 'https://rumble.com/embed/v27bu4a/?pub=253wa8' },
    { title: 'Aula 05', videoUrl: 'https://rumble.com/embed/v27bupe/?pub=253wa8' },
    { title: 'Aula 06', videoUrl: 'https://rumble.com/embed/v27buya/?pub=253wa8' },
    { title: 'Aula 07', videoUrl: 'https://rumble.com/embed/v27bvb2/?pub=253wa8' },
    { title: 'Aula 08', videoUrl: 'https://rumble.com/embed/v27bxco/?pub=253wa8' },
    { title: 'Aula 09', videoUrl: 'https://rumble.com/embed/v27by46/?pub=253wa8' },
    { title: 'Aula 10', videoUrl: 'https://rumble.com/embed/v27c02q/?pub=253wa8' },
  ];
  module9Lessons: Lesson[] = [
    { title: 'Aula 01', videoUrl: 'https://rumble.com/embed/v27c0bm/?pub=253wa8' },
    { title: 'Aula 02', videoUrl: 'https://rumble.com/embed/v27c0p8/?pub=253wa8' },
    { title: 'Aula 03', videoUrl: 'https://rumble.com/embed/v27c10c/?pub=253wa8' },
    { title: 'Aula 04', videoUrl: 'https://rumble.com/embed/v27c198/?pub=253wa8' },
  ];
  module10Lessons: Lesson[] = [
    { title: 'Aula 01', videoUrl: 'https://rumble.com/embed/v27c1ny/?pub=253wa8' },
    { title: 'Aula 02', videoUrl: 'https://rumble.com/embed/v27c2ga/?pub=253wa8' },
    { title: 'Aula 03', videoUrl: 'https://rumble.com/embed/v27c2my/?pub=253wa8' },
    { title: 'Aula 04', videoUrl: 'https://rumble.com/embed/v27c37i/?pub=253wa8' },
    { title: 'Aula 05', videoUrl: 'https://rumble.com/embed/v27c3nw/?pub=253wa8' },
    { title: 'Aula 06', videoUrl: 'https://rumble.com/embed/v27c4ke/?pub=253wa8' },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  isSubMenuOpen(module: string): boolean {
    return this.selectedModule === module;
  }

  toggleSubMenu(module: string): void {
    if (this.selectedModule === module) {
      this.selectedModule = '';
    } else {
      this.selectedModule = module;
    }
  }

  showLesson(lesson: Lesson): void {
    this.selectedLesson = lesson;
    this.isVideoOpen = true;
  }

  closeVideo(): void {
    this.selectedLesson = null;
    this.isVideoOpen = false;
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

