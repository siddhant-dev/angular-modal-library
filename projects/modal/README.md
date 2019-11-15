# Project name

<!--- These are examples. See https://shields.io for others or to customize this set of shields. You might want to include dependencies, project status and licence info here --->
![GitHub repo size](https://img.shields.io/github/repo-size/siddhant-dev/angular-modal-library)
![GitHub contributors](https://img.shields.io/github/contributors/siddhant-dev/angular-modal-library)
![GitHub stars](https://img.shields.io/github/stars/siddhant-dev/angular-modal-library?style=social)
![GitHub forks](https://img.shields.io/github/forks/siddhant-dev/angular-modal-library?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/IamSidd_J?label=Follow?style=social)

Project name is a `angular-modal-library` that allows `inset a modal on any angular component` to do `various task`.

This popup will appear after calling a function with Id of the modal as parameter. Very easy to use and you can customise the functionlity inside the modal

## Prerequisites

Before you begin, ensure you have met the following requirements:
<!--- These are just example requirements. Add, duplicate or remove as required --->
* You have installed the latest version of `@angular 8+`
* You have a `Windows/Linux/Mac` machine. 
<!-- * You have read `<guide/link/documentation_related_to_project>`. -->

## Installing angular-modal-library

To install angular-modal-library, follow these steps:

Linux and macOS:
```
npm install angular-modal-library
```

Windows:
```
npm install angular-modal-library
```
## Using angular-modal-library

To use angular-modal-library, follow these steps:

```
import ModalModule from angular-modal-library in your app.module.ts file
import ModalService from angular-modal-library in your <your-component>.componenet.ts file 

ModalService provides two functions opne(id) openeing and close(id) closing make sure pass the modal id as the parameter in both the functions

in the html create a button and on click it should call the open function. 
Also create the modal as shown in the example below: 

<pm-modal id="my-modal">
  <div>
    HI
  </div>
  <button (click)="closeModal('my-modal')">Close </button>
</pm-modal> 

Close button will be inside the modal to close it. 

```
The classes used in Modal library for styling are as follow: 

.modal
.modal-body
.modal-background
.modal-open

It is also responsive for mobile devices. 

to custom styling you will need to use ElementRef. (Google it and experiment with it)


## Contributing to angular-modal-library
<!--- If your README is long or you have some specific process or steps you want contributors to follow, consider creating a separate CONTRIBUTING.md file--->
To contribute to angular-modal-library, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thanks to the following people who have contributed to this project:

* [@scottydocs](https://github.com//siddhant-dev) 📖
<!-- * [@cainwatson](https://github.com/cainwatson) 🐛
* [@calchuchesta](https://github.com/calchuchesta) 🐛 -->

You might want to consider using something like the [All Contributors](https://github.com/all-contributors/all-contributors) specification and its [emoji key](https://allcontributors.org/docs/en/emoji-key).

## Contact

If you want to contact me you can reach me at me@siddhantjaiswal.dev.

## License
<!--- If you're not sure which open license to use see https://choosealicense.com/--->

This project uses the following license: [ MIT ](https://github.com/siddhant-dev/angular-modal-library/blob/master/LICENSE).
