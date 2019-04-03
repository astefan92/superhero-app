import {
    Component,
    ChangeDetectionStrategy,
    OnInit
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginForm } from 'src/app/shared/models/login-form.model';

@Component({
    selector: 'signin',
    templateUrl: './signin.page.html',
    styleUrls: ['./signin.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SigninPageComponent implements OnInit {

    public submitted = false;
    public email: AbstractControl;
    public password: AbstractControl;
    public loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        public auth: AuthService
    ) { }

    ngOnInit() {
        this.initLoginForm();
    }

    public initLoginForm(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        this.email = this.loginForm.controls.email;
        this.password = this.loginForm.controls.password;
    }

    public onSubmit(event: Event, form: LoginForm): void {
        event.stopPropagation();
        this.submitted = true;

        if (this.loginForm.valid) {
            this.auth.login(form.email, form.password);
        }
    }
}