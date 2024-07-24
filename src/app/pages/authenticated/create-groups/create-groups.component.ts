import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';
import { GroupService } from '../../../services/groups.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-groups',
  templateUrl: './create-groups.component.html',
  styleUrls: ['./create-groups.component.css'],
  host: {
    class:'h-full w-full'
  }
})
export class CreateGroupsComponent {
  @ViewChild('thumbInput', { static: false }) thumbInput?: ElementRef;

  protected addLoading: boolean = false;
  protected hasSubmitted: boolean = false;
  protected filePreview?: string;
  protected file?: File;

  private sanitizer = inject(DomSanitizer);
  private formBuilder = inject(FormBuilder);
  private groupService = inject(GroupService);
  private router = inject(Router);

  protected groupForm = this.formBuilder.group({
    length: ['', [Validators.required, Validators.min(1)]],
    startDate: ['', Validators.required],
    limit: ['', [Validators.required, Validators.min(1)]],
    creatorNumber: ['', Validators.maxLength(255)],
    address: ['', [Validators.required, Validators.maxLength(255)]]
  });

  getFormControl(field: 'length' | 'startDate' | 'limit' |  'creatorNumber' | 'address') {
    return this.groupForm.controls[field];
  }

  get length() { return this.getFormControl('length'); }
  get startDate() { return this.getFormControl('startDate'); }
  get limit() { return this.getFormControl('limit'); }
  get creatorNumber() { return this.getFormControl('creatorNumber'); }
  get address() { return this.getFormControl('address'); }

  async uploadFile(event: Event) {
    const file = (event.target! as HTMLInputElement).files![0];

    this.filePreview = URL.createObjectURL(file);
    this.file = file;
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  async submitForm() {
    this.hasSubmitted = true;

    if (this.groupForm.invalid || !this.file) throw '';

    const form = this.mountFormValues();
    this.addLoading = true;

    try {
      await this.groupService.createGroup(form, this.file!);

      this.router.navigate(['groups/home'])
    } catch (error) {
      window.alert('Grupo inválido!')
    } finally {
      this.addLoading = false;
    }
  }

  mountFormValues() {
    return {
      length: this.length.value!,
      startDate: this.startDate.value!,
      limit: this.limit.value!,
      creatorNumber: this.creatorNumber.value! || null,
      address: this.address.value!
    };
  }
}
