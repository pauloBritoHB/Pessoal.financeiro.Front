import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/Models/Usuario';
import { LoginService } from './../Services/login.service';
import { ErrorMessage } from './../../Models/ErrorMessage';
import { NavController } from '@ionic/angular';
import { ResultUsuario } from './../../Models/ResultPadrao';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public formulario: FormGroup;
  public usuario: Usuario;
  public clicou = false;
  public logou = false;
  public mensagem: string;
  public msgError: ErrorMessage;
  public result: ResultUsuario;

  constructor(
    private formBuilder: FormBuilder,
    private service: LoginService,
    private navCtrl: NavController) {
    this.formulario = this.formBuilder.group({
      login: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  public onSubmit() {
    this.mensagem = 'Conectando';
    this.clicou = true;
    this.usuario = this.formulario.value;
    this.service.logar(this.usuario)
      .subscribe(
        success => {
          this.result = success;
          if (this.result.isError) {
            this.logou = false;
            this.mensagem = this.result.message[0];
          } else {
            this.logou = true;
            this.usuario = this.result.data[0];
          }
        },
        error => {
          this.msgError = error;
          this.mensagem = this.msgError.message;
        },
        () => {
          console.log(this.usuario);
        }
      );
  }

  public entrar() {
    this.navCtrl.navigateForward('/tabs/tab1');
  }



}
