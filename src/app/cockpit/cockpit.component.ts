import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  newServerName = '';
  newServerContent = '';

  onAddServer(serverNameInputValue: string) {
    this.serverCreated.emit({
      serverName: serverNameInputValue,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
