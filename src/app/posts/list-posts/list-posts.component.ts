import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {
/*   postList=[

    {titulo:'Primer post',contenido:'contenido de primer post'},
    {titulo:'segundo post',contenido:'contenido de segundo post'},
    {titulo:'tercero post',contenido:'contenido de tercer post'}
  ] */
  @Input() postList=[];
}
