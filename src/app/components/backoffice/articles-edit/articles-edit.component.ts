import { ToastrService } from 'ngx-toastr';
import { Article } from './../../../models/article';
import { ArticleService } from './../../../services/article.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-edit.component.html',
  styleUrls: ['./articles-edit.component.css']
})
export class ArticlesEditComponent implements OnInit {



  artircleForm = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(10)]),
    body: new FormControl("", [Validators.required]),
    price: new FormControl(0, [Validators.required, Validators.pattern('[0-9.]+')]),
    active: new FormControl(false)
  })

  id: string = "";
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.retreiveOneArticle();
  }

  retreiveOneArticle() {
    this.articleService.getOneArticle(this.id)
      .subscribe((res: Article) => {
        this.artircleForm.patchValue(res);
      })
  }
  setArticale() {
    this.articleService.updateArticle(this.id, this.artircleForm.value)
      .then(() => {

        this.toastr.info('updated', 'Article updated SuccessFully', {
          timeOut: 5000,
          positionClass: 'toast-bottom-left',
          tapToDismiss: true
        });
        this.router.navigateByUrl('/blog')
      }


      ).catch()
  }

}
