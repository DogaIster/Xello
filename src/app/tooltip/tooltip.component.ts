import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  ngOnInit() {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
      $(document).keydown((e) => {
        // ESCAPE key pressed
        if (e.keyCode === 27) {
          $('[data-toggle="tooltip"]').tooltip('hide');
        }
      });
    });
  }
}
