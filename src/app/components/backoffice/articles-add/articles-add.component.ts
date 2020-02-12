import { ArticleService } from './../../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-articles-add',
  templateUrl: './articles-add.component.html',
  styleUrls: ['./articles-add.component.css']
})
export class ArticlesAddComponent implements OnInit {

  artircleForm = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(10)]),
    body: new FormControl("", [Validators.required]),
    price: new FormControl(0, [Validators.required, Validators.pattern('[0-9.]+')]),
    active: new FormControl(false)
  })
  constructor(
     private articleService: ArticleService,
     private router: Router,
     private toastr: ToastrService
     ) { }

  ngOnInit() {
  }

  persistArticle() {

    if(this.artircleForm.invalid) {
      alert("sir tal3ab")
      return;
    }

    let data: Article = {
      ...this.artircleForm.value,
      created_at: Date()
    }

    this.articleService.saveArticle(data)
        .then(() => {
          this.toastr.success('Created', 'Article created SuccessFully', {
            timeOut: 5000,
            positionClass: 'toast-bottom-left',
            tapToDismiss: true
          });
           this.router.navigateByUrl('/blog')
        })
        .catch((err) => console.error(err))
  }

}
