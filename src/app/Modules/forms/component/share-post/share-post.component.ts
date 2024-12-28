import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-share-post',
  templateUrl: './share-post.component.html',
  styleUrls: ['./share-post.component.css']
})
export class SharePostComponent {

  constructor(private route: ActivatedRoute, private meta: Meta, private title: Title) {

  }

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    const image = this.route.snapshot.paramMap.get('image');

    this.title.setTitle(title || 'Default Title');
    this.meta.updateTag({ property: 'og:title', content: title || 'test' });
    this.meta.updateTag({ property: 'og:image', content: image || 'test' });
    this.meta.updateTag({ property: 'og:description', content: 'Description that will show in the preview' });
    this.meta.updateTag({ property: 'og:url', content: '//www.example.com/URL of the article' });
  }
}
