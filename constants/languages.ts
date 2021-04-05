export interface ILanguage {
  name: string;
  mode: string;
  highlight: string[];
}

export const LANGUAGES: ILanguage[] = [
  {
    name: "Auto",
    mode: "auto",
    highlight: []
  },
  {
    name: "Bash",
    mode: "shell",
    highlight: ["shell", "console"]
  },
  {
    name: "Plain Text",
    mode: "text",
    highlight: ["plaintext", "txt", "text"]
  },
  {
    name: "C",
    mode: "clike",
    highlight: ["c", "h"]
  },
  {
    name: "C++",
    mode: "clike",
    highlight: ["cpp", "hpp", "cc", "hh", "c++", "h++", "cxx", "hxx"]
  },
  {
    name: "C#",
    mode: "clike",
    highlight: ["csharp", "cs"]
  },
  {
    name: "Clojure",
    mode: "clojure",
    highlight: ["clojure", "clj"]
  },
  {
    name: "CoffeeScript",
    mode: "coffeescript",
    highlight: ["coffeescript", "coffee", "cson", "iced"]
  },
  {
    name: "Crystal",
    mode: "crystal",
    highlight: ["crystal", "cr"]
  },
  {
    name: "CSS",
    mode: "css",
    highlight: ["css", "scss"]
  },
  {
    name: "D",
    mode: "d",
    highlight: ["d"]
  },
  {
    name: "Dart",
    mode: "dart",
    highlight: ["dart"]
  },
  {
    name: "Diff",
    mode: "diff",
    highlight: ["diff", "patch"]
  },
  {
    name: "Django",
    mode: "django",
    highlight: ["diff", "patch"]
  },
  {
    name: "Docker",
    mode: "dockerfile",
    highlight: ["dockerfile", "docker"]
  },
  {
    name: "Elm",
    mode: "elm",
    highlight: ["elm"]
  },
  {
    name: "Erlang",
    mode: "erlang",
    highlight: ["erlang", "erl"]
  },
  {
    name: "Fortran",
    mode: "fortran",
    highlight: ["fortran", "f90", "f95"]
  },
  {
    name: "Gherkin",
    mode: "gherkin",
    highlight: ["gherkin"]
  },
  {
    name: "Go",
    mode: "go",
    highlight: ["go", "golang"]
  },
  {
    name: "Groovy",
    mode: "groovy",
    highlight: ["groovy"]
  },
  {
    name: "Handlebars",
    mode: "handlebars",
    highlight: ["handlebars", "hbs", "html.hbs", "html.handlebars"]
  },
  {
    name: "Haskell",
    mode: "haskell",
    highlight: ["haskell", "hs"]
  },
  {
    name: "HTML/XML",
    mode: "htmlmixed",
    highlight: ["xml", "html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "svg"]
  },
  {
    name: "Java",
    mode: "clike",
    highlight: ["java", "jsp"]
  },
  {
    name: "JavaScript",
    mode: "javascript",
    highlight: ["javascript", "js"]
  },
  {
    name: "JSON",
    mode: "javascript",
    highlight: ["json"]
  },
  {
    name: "JSX",
    mode: "jsx",
    highlight: ["jsx"]
  },
  {
    name: "Julia",
    mode: "julia",
    highlight: ["julia", "julia-repl"]
  },
  {
    name: "Kotlin",
    mode: "clike",
    highlight: ["kotlin", "kt"]
  },
  {
    name: "LaTeX",
    mode: "stex",
    highlight: ["tex"]
  },
  {
    name: "Lisp",
    mode: "commonlisp",
    highlight: ["lisp"]
  },
  {
    name: "Lua",
    mode: "lua",
    highlight: ["lua"]
  },
  {
    name: "Markdown",
    mode: "markdown",
    highlight: ["markdown", "md", "mkdown", "mkd"]
  },
  {
    name: "Mathematica",
    mode: "mathematica",
    highlight: ["mathematica", "mma", "wl"]
  },
  {
    name: "MATLAB / Octave",
    mode: "octave",
    highlight: ["matlab"]
  },
  {
    name: "NGINX",
    mode: "nginx",
    highlight: ["nginx", "nginxconf"]
  },

  {
    name: "Objective C",
    mode: "clike",
    highlight: ["objectivec", "mm", "objc", "obj-c", "obj-c++", "objective-c++"]
  },
  {
    name: "OCaml / F#",
    mode: "mllike",
    highlight: ["ocaml", "ml"]
  },
  {
    name: "Perl",
    mode: "perl",
    highlight: ["perl", "pl", "pm"]
  },
  {
    name: "PHP",
    mode: "php",
    highlight: ["php", "php3", "php4", "php5", "php6", "php7", "php8"]
  },
  {
    name: "PowerShell",
    mode: "powershell",
    highlight: ["powershell", "ps", "ps1"]
  },
  {
    name: "Python",
    mode: "python",
    highlight: ["python", "py", "gyp"]
  },
  {
    name: "R",
    mode: "r",
    highlight: ["R"]
  },
  {
    name: "Ruby",
    mode: "ruby",
    highlight: ["ruby", "rb", "gemspec", "podspec", "thor", "irb"]
  },
  {
    name: "Rust",
    mode: "rust",
    highlight: ["rust", "rs"]
  },
  {
    name: "Scala",
    mode: "clike",
    highlight: ["scala"]
  },
  {
    name: "Smalltalk",
    mode: "smalltalk",
    highlight: ["smalltalk", "st"]
  },
  {
    name: "SQL",
    mode: "sql",
    highlight: ["pgsql", "postgres", "postgresql", "sql"]
  },
  {
    name: "Stylus",
    mode: "stylus",
    highlight: ["stylus", "styl"]
  },
  {
    name: "Swift",
    mode: "swift",
    highlight: ["swift"]
  },
  {
    name: "TCL",
    mode: "tcl",
    highlight: ["tcl", "tk"]
  },
  {
    name: "TypeScript",
    mode: "javascript",
    highlight: ["typescript", "ts"]
  },
  {
    name: "Twig",
    mode: "twig",
    highlight: ["twig", "craftcms"]
  },
  {
    name: "VB.NET",
    mode: "vb",
    highlight: ["vbnet", "vb"]
  },
  {
    name: "Verilog",
    mode: "verilog",
    highlight: ["verilog", "v"]
  },
  {
    name: "XQuery",
    mode: "xquery",
    highlight: ["xquery", "xpath", "xq"]
  },
  {
    name: "YAML",
    mode: "yaml",
    highlight: ["yml", "yaml"]
  }
];

export const hljsLanguages: string[] = LANGUAGES.reduce(
  (arr, lang) => [...arr, ...lang.highlight],
  []
);
