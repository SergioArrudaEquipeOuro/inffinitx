import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Lesson {
  title: string;
  videoUrl: string;
}

@Component({
  selector: 'app-curso-forex',
  templateUrl: './curso-forex.component.html',
  styleUrls: ['./curso-forex.component.css']
})
export class CursoForexComponent {

  
 
  selectedModule: string = '';
  selectedLesson: Lesson | null = null;
  isVideoOpen: boolean = false;


  
  module1Lessons: Lesson[] = [
    { title: 'Aula 00', videoUrl: 'https://rumble.com/embed/v2rraj2/?pub=4' },
    { title: 'Aula 01', videoUrl: 'https://rumble.com/embed/v2rraj2/?pub=4' },
    { title: 'Aula 02', videoUrl: 'https://rumble.com/embed/v2rrdhm/?pub=4' },
    { title: 'Aula 03', videoUrl: 'https://rumble.com/embed/v2rreso/?pub=4' },
    { title: 'Aula 04', videoUrl: 'https://rumble.com/embed/v2rrfl2/?pub=4' },
    { title: 'Aula 05', videoUrl: 'https://rumble.com/embed/v2rrg10/?pub=4' },
    { title: 'Aula 06', videoUrl: 'https://rumble.com/embed/v2rrghc/?pub=4' },
    { title: 'Aula 07', videoUrl: 'https://rumble.com/embed/v2rrh1k/?pub=4' },
    { title: 'Aula 08', videoUrl: 'https://rumble.com/embed/v2rrhhw/?pub=4' },
    { title: 'Aula 09', videoUrl: 'https://rumble.com/embed/v2rrlmu/?pub=4' },
    { title: 'Aula 10', videoUrl: 'https://rumble.com/embed/v2rrlxc/?pub=4' },
    { title: 'Aula 11', videoUrl: 'https://rumble.com/embed/v2rrm2e/?pub=4' },
    { title: 'Aula 12', videoUrl: 'https://rumble.com/embed/v2rrmda/?pub=4' },
    { title: 'Aula 13', videoUrl: 'https://rumble.com/embed/v2rrmlu/?pub=4' },
    { title: 'Aula 14', videoUrl: 'https://rumble.com/embed/v2rrmvy/?pub=4' },
    { title: 'Aula 15', videoUrl: 'https://rumble.com/embed/v2rrnw4/?pub=4' },
    { title: 'Aula 16', videoUrl: 'https://rumble.com/embed/v2rro68/?pub=4' },
    { title: 'Aula 17', videoUrl: 'https://rumble.com/embed/v2rrod8/?pub=4' },
    { title: 'Aula 18', videoUrl: 'https://rumble.com/embed/v2rroju/?pub=4' },
    { title: 'Aula 19', videoUrl: 'https://rumble.com/embed/v2rrowo/?pub=4' },
    { title: 'Aula 20', videoUrl: 'https://rumble.com/embed/v2rrp1c/?pub=4' },
    { title: 'Aula 21', videoUrl: 'https://rumble.com/embed/v2rrp58/?pub=21k1ig' },
    { title: 'Aula 20', videoUrl: 'https://rumble.com/embed/v2rrp7k/?pub=4' },
    { title: 'Aula 21', videoUrl: 'https://rumble.com/embed/v2rrpi2/?pub=4' },
    { title: 'Aula 22', videoUrl: 'https://rumble.com/embed/v2rrpoo/?pub=4' },
    { title: 'Aula 23', videoUrl: 'https://rumble.com/embed/v2rrpz6/?pub=4' },
    { title: 'Aula 24', videoUrl: 'https://rumble.com/embed/v2rrq6y/?pub=4' },
    { title: 'Aula 25', videoUrl: 'https://rumble.com/embed/v2rrqec/?pub=4' },
    { title: 'Aula 26', videoUrl: 'https://rumble.com/embed/v2rrqou/?pub=4' },
    { title: 'Aula 27', videoUrl: 'https://rumble.com/embed/v2rrqwm/?pub=4' },
    { title: 'Aula 28', videoUrl: 'https://rumble.com/embed/v2rrr0i/?pub=4' },
    { title: 'Aula 29', videoUrl: 'https://rumble.com/embed/v2rrr5k/?pub=4' },
    { title: 'Aula 30', videoUrl: 'https://rumble.com/embed/v2rrr0i/?pub=4' },
    { title: 'Aula 31', videoUrl: 'https://rumble.com/embed/v2rrr5k/?pub=4' },
    { title: 'Aula 32', videoUrl: 'https://rumble.com/embed/v2rrrb0/?pub=4' },
    { title: 'Aula 33', videoUrl: 'https://rumble.com/embed/v2rrrh8/?pub=21k1ig' },
  ];
  

  constructor(private sanitizer: DomSanitizer) {
    this.selectedModule = 'module1';
    this.selectedLesson = this.module1Lessons[0];
    this.isVideoOpen = true;
  }

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
