//import { formatDistanceStrict, format } from "date-fns";

const taskLinkList = links => {
  // Set Link list placeholder
  const linkPlaceholder = document.createDocumentFragment();
  links.forEach(link => {
    // Create Table row for each Link
    const placeholder = document.createElement("tr");

    // Link title
    const linkTitlePlace = document.createElement("td");
    linkTitlePlace.setAttribute(
      "style",
      "text-overflow: ellipsis;max-width: 0;overflow: hidden;width: 50%"
    );
    const linkTitle = document.createElement("h5");
    linkTitle.classList = "m-0 font-weight-normal link-title";
    linkTitle.innerText = link.title;
    linkTitlePlace.appendChild(linkTitle);

    // Link URL
    const linkUrlPlace = document.createElement("td");
    linkUrlPlace.setAttribute(
      "style",
      "text-overflow: ellipsis;white-space: nowrap;max-width: 0;overflow: hidden;width: 40%"
    );
    const linkUrlLink = document.createElement("a");
    linkUrlLink.setAttribute("href", link.link);
    linkUrlLink.setAttribute("class", "link-url");
    linkUrlLink.setAttribute("target", "_blank");
    linkUrlLink.innerText = link.link;
    linkUrlPlace.appendChild(linkUrlLink);

    // Link options menu
    const linkIconPlace = document.createElement("td");
    // Submit Link edit save icon
    const linkEditSave = document.createElement("a");
    linkEditSave.setAttribute("href", "#");
    const linkEditSaveIcon = document.createElement("i");
    linkEditSaveIcon.classList = "d-none text-success remixicon-save-3-fill";
    linkEditSave.appendChild(linkEditSaveIcon);
    // Main dropdown container div
    const linkOptions = document.createElement("div");
    linkOptions.classList = "dropdown float-right";
    // Main dropdown dots toggle task
    const linkDropdownToggle = document.createElement("a");
    linkDropdownToggle.setAttribute("href", "#");
    linkDropdownToggle.setAttribute("data-toggle", "dropdown");
    linkDropdownToggle.classList = "dropdown-toggle arrow-none";
    const linkDotsIcon = document.createElement("i");
    linkDotsIcon.classList = "mdi mdi-dots-vertical m-0 text-muted h3";
    linkDropdownToggle.appendChild(linkDotsIcon);
    // Dropdown menu div
    const linkDropdownMenu = document.createElement("div");
    linkDropdownMenu.classList = "dropdown-menu dropdown-menu-right";
    linkDropdownToggle.setAttribute("x-placement", "bottom-end");
    // Edit link item
    const linkEditToggle = document.createElement("a");
    linkEditToggle.setAttribute("href", "#");
    linkEditToggle.setAttribute("data-task", link.task);
    linkEditToggle.setAttribute("data-link", link._id);
    linkEditToggle.classList = "dropdown-item link-edit";
    const linkEditIcon = document.createElement("i");
    linkEditIcon.setAttribute("data-task", link.task);
    linkEditIcon.setAttribute("data-link", link._id);
    linkEditIcon.classList = "fe-edit-1 mr-2";
    const linkEditLabel = document.createTextNode("Edit");
    linkEditToggle.appendChild(linkEditIcon);
    linkEditToggle.appendChild(linkEditLabel);
    // Delete link item
    const linkDeleteToggle = document.createElement("a");
    linkDeleteToggle.setAttribute("href", "#");
    linkDeleteToggle.setAttribute("data-task", link.task);
    linkDeleteToggle.setAttribute("data-link", link._id);
    linkDeleteToggle.classList = "dropdown-item link-delete";
    const linkDeleteIcon = document.createElement("i");
    linkDeleteIcon.setAttribute("data-task", link.task);
    linkDeleteIcon.setAttribute("data-link", link._id);
    linkDeleteIcon.classList = "remixicon-delete-bin-2-line mr-2";
    const linkDeleteLabel = document.createTextNode("Delete");
    linkDeleteToggle.appendChild(linkDeleteIcon);
    linkDeleteToggle.appendChild(linkDeleteLabel);
    // Append Edit and Delete items to Dropdown menu div
    linkDropdownMenu.appendChild(linkEditToggle);
    linkDropdownMenu.appendChild(linkDeleteToggle);
    // Append dots toggle and Dropdown menu div to Main dropdown container div
    linkOptions.appendChild(linkDropdownToggle);
    linkOptions.appendChild(linkDropdownMenu);
    // Append Link edit send icon to td element
    linkIconPlace.appendChild(linkEditSave);
    // Append Main dropdown container div to td element
    linkIconPlace.appendChild(linkOptions);

    // Append created elements
    placeholder.appendChild(linkTitlePlace);
    placeholder.appendChild(linkUrlPlace);
    placeholder.appendChild(linkIconPlace);
    linkPlaceholder.appendChild(placeholder);
  });

  return linkPlaceholder;
};

export default taskLinkList;
