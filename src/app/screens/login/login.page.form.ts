import { FormBuilder, FormGroup, Validators } from "@angular/Forms";

export class LoginPageForm {

    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
    }

    createForm() : FormGroup {
        return this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]] ,
            password: ['', [Validators.required]]
        });


    }
}