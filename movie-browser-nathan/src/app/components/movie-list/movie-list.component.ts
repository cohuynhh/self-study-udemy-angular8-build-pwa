import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title: string = "Movie listing";
  movies: any[];

  constructor(private service: MoviesService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      qparams => this.service.searchMovies(qparams['q']).subscribe(resp => this.movies = resp.Search)
    );
  }

}
