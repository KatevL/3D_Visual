function createForklift(x, y, z, id, callback) {
    var loader = new THREE.ObjectLoader();
    loader.load('images/simpleForkliftedit.json', function(obj) {
        obj.rotateY(-Math.PI / 2);
        obj.scale.set(20,20,20)

        obj.position.x = x;
        obj.position.y = y;
        obj.position.z = z;

        obj.name = id;

        var _thisForklift = {
            id: id,
            object: obj,
            cube: {
                cube_x: x,
                cube_y: y + 6,
                cube_z: z
              },
              work_in_progress: []


        }

        callback(_thisForklift);
    });
}
