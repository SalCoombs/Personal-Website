// Vertex Shader

// An attribute will receive data from a buffer
attribute vec4 a_position;

// all shaders have a main function
void main() {

    // gl_position is a speacial variable a vertes shader
    // is responsible for setting
    gl_Position = a_position;
}