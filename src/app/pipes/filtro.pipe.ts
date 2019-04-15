import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filtro"
})
export class FiltroPipe implements PipeTransform {
  transform(arreglo: any[], texto: string, columna: string): any[] {
    if (texto === "" || texto === undefined) {
      return arreglo;
    }

    texto = texto.toLowerCase();

    return arreglo.filter(item => {
      // true or false. JS is case sensitive:
      return item[columna].toLowerCase().includes(texto);
    });
  }
}
