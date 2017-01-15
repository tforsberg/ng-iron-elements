import {Component,Input,NgModule,ModuleWithProviders} from '@angular/core';

export type Sizing = 'cover' | 'contain';

/**
 * IronImage is an element for displaying an image that provides useful sizing
 * and preloading options not found on the standard <img> tag.
 *
 * @export
 * @class IronImage
 */
@Component({
  selector: 'iron-image, [iron-image]',
  templateUrl: 'image.html',
  styleUrls: ['image.css']
})
export class IronImage {

private _src: string;
private _placeholder: string;
private _alt: string;
private _fade: boolean = false;
private _width: number | string;
private _height: number | string;
private _preventLoad = false;
private _sizing: Sizing = null;
private _position: string = 'center';
private _preload: boolean = false;

  /** The URL of an image. */
  @Input()
  set src(value: string) { this._src = value; }
  get src() { return this._src; }

  /**
   * This image will be used as a background/placeholder until the src image has loaded.
   * Use of a data-URI for placeholder is encouraged for instant rendering.
   */
  @Input()
  set placeholder(value: string) { this._src = value; }
  get placeholder() { return this._src; }

  /** A short text alternative for the image. */
  @Input()
  set alt(value: string) { this._alt = value; }
  get alt() { return this._alt; }

  /** When preload is true, setting fade to true will cause the image to fade into place. */
  @Input()
  set fade(value: boolean) { this._fade = value; }
  get fade() { return this._fade; }

  /**
   * Can be used to set the width of image (e.g. via binding);
   * size may also be set via CSS.
   */
  @Input()
  set width(value: number | string) {
    this._width = isNaN(<number>value) ? value : value + 'px';
  }
  get width() { return this._width; }

  /**
   * Can be used to set the height of image (e.g. via binding);
   * size may also be set via CSS.
   */
  @Input()
  set height(value: number | string) {
    this._height = isNaN(<number>value) ? value : value + 'px';
  }
  get height() { return this._height; }

  /**
   * When true, the image is prevented from loading and any placeholder is shown.
   * This may be useful when a binding to the src property is known to be invalid,
   * to prevent 404 requests.
   */
  @Input()
  set preventLoad(value: boolean) { this._preventLoad = value; }
  get preventLoad() { return this._preventLoad; }

  /**
   * Sets a sizing option for the image.
   * Valid values are contain (full aspect ratio of the image is contained within the element and letterboxed)
   * or cover (image is cropped in order to fully cover the bounds of the element),
   * or null (default: image takes natural size).
   */
  @Input()
  set sizing(value: Sizing) { this._sizing = value; }
  get sizing() { return this._sizing; }

  /**
   * When a sizing option is used (cover or contain),
   * this determines how the image is aligned within the element bounds.
   */
  @Input()
  set position(value: string) { this._position = value; }
  get position() { return this._position; }

  /**
   * When true, any change to the src property will cause
   * the placeholder image to be shown until the new image has loaded.
   */
  @Input()
  set preload(value: boolean) { this._preload = value; }
  get preload() { return this._preload; }
}


@NgModule({
  exports: [IronImage],
  declarations: [IronImage],
})
export class IronImageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IronImageModule,
      providers: []
    };
  }
}
