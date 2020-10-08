adlc haskell *.adl.ml -O hask --merge-adlext=.adl.ml
adlc typescript *.adl.ml -O ./ts --verbose --generate-transitive --include-rt -R ./meta
# Usage: adlc typescript [OPTION...] files...
#   -I DIR  --searchdir=DIR                         Add the specifed directory to the ADL searchpath
#   -O DIR  --outputdir=DIR                         Set the directory where generated code is written
#           --merge-adlext=EXT                      Add the specifed adl file extension to merged on loading
#           --verbose                               Print extra diagnostic information, especially about files being read/written
#           --no-overwrite                          Don't update files that haven't changed
#           --generate-transitive                   Also generate code for the transitive dependencies of the specified adl files
#           --include-rt                            Generate the runtime code
#           --include-resolver                      Generate the resolver map for all generated adl files
#           --exclude-ast                           Exclude the generated ASTs
#           --excluded-ast-annotations=SCOPEDNAMES  Set the annotations to be excluded from the ast (comma separated, default=sys.annotations.Doc)
#   -R DIR  --runtime-dir=DIR                       Set the directory where runtime code is written
