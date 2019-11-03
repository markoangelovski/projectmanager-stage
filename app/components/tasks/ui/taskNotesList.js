import { format, formatDistanceStrict } from "date-fns";

const taskNotesList = notes => {
  // Create element for each note
  const notesToRender = notes
    .map(
      (note, i) => `
<div class="card">
<div class="card-body">
    <div class="card-widgets">
        <a href="#" ><i class="remixicon-edit-box-line" data-toggle="edit" data-note="${
          note._id
        }" data-task="${note.task}"></i></a>
        <a data-toggle="collapse" href="#cardCollpase${i}" role="button" aria-expanded="true" aria-controls="cardCollpase${i}" class=""><i class="mdi mdi-minus"></i></a>
        <a href="#" ><i class="mdi mdi-close" data-toggle="delete" data-note="${
          note._id
        }" data-task="${note.task}"></i></a>
    </div>
    <h5 title="${format(
      new Date(note.date),
      "MMM do yyyy, HH:mm"
    )}" class="card-title mb-0">Created ${formatDistanceStrict(
        new Date(note.date),
        new Date(),
        {
          addSuffix: true
        }
      )}</h5>
    <div id="cardCollpase${i}" class="note-text pt-3 collapse show" style="">
    ${note.note}
    </div>
</div>
</div>`
    )
    .join("");

  return notesToRender;
};

export default taskNotesList;
