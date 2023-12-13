import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creategroup',
  template: `
    <div class="container">
      <div class="px-4 py-5 my-5">
        <div class="col-lg-6 mx-auto text-blue">
          <div class="mb-3">
            <a routerLink="/" class="nav-link link-blue">
              <i class="bi bi-arrow-left-circle-fill text-blue" style="font-size: 32px;"></i>
            </a>
          </div>
          <h4 class="mb-3">Create a Group</h4>
          <form class="needs-validation" [formGroup]="groupForm" ngNativeValidate (ngSubmit)="onSubmit()">
            <div class="row g-3">
              <div class="col-sm-12">
                <label for="group" class="form-label">Group name</label>
                <input type="text" class="form-control" id="group" autocomplete="off" required>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <!-- <div class="col-12 mb-3">
                <label for="tag" class="form-label">Tags <span>(Optional)</span></label>
                <input type="email" class="form-control" id="tag" autocomplete="off">
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div> -->
              <div class="col-12 mb-3">
                <form [formGroup]="tagsForm" ngNativeValidate (ngSubmit)="onTagSubmit()">
                    <label for="tag" class="form-label">Tags <span>(Optional)</span></label>
                    <div class="text-blue mb-2">
                      <span *ngFor="let tag of this.groupForm.get('tags')?.value" class="tag me-2" (click)="removeTag()"><i class="bi bi-x-square-fill me-1"></i>{{tag}}</span>
                    </div>
                    <input type="text" class="form-control" id="tag" autocomplete="off" formControlName="tag">
                    <div class="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </form>
                </div>
            </div>

            <div class="form-check mb-3">
              <input type="checkbox" class="form-check-input" id="same-address">
              <label class="form-check-label" for="same-address">Make private?</label>
            </div>

            <button class="w-100 btn btn-primary btn-lg" type="submit">Create</button>
          </form>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./creategroup.component.scss']
})
export class CreategroupComponent {
  groupForm = new FormGroup({
    name: new FormControl<string>(''),
    tags: new FormControl<string[]>(['test', 'tes']),
  });

  tagsForm = new FormGroup({
    tag: new FormControl('')
  });

  ngOnInit() { }

  onTagSubmit() {
    const newTag = this.tagsForm.get('tag')?.value;
    let tags = this.groupForm.get('tags')?.value;
    if (newTag != null && !tags?.includes(newTag)) {
      tags?.push(newTag);
    }
    this.tagsForm.controls['tag'].setValue('');
  }

  removeTag() {
    const tagToRemove = this.tagsForm.get('tag')?.value;
    console.log(tagToRemove);
    let tags = this.groupForm.get('tags')?.value?.filter(x => x !== tagToRemove);
    this.groupForm.controls['tags'].setValue(tags ?? []);
  }

  onSubmit() {
    console.log('test');
  }
}
