/* @generated from adl module covhub.steps */

package adl.covhub.steps;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import org.adl.runtime.Builders;
import org.adl.runtime.Factories;
import org.adl.runtime.Factory;
import org.adl.runtime.JsonBinding;
import org.adl.runtime.JsonBindings;
import org.adl.runtime.Lazy;
import org.adl.runtime.sys.adlast.ScopedName;
import org.adl.runtime.sys.adlast.TypeExpr;
import org.adl.runtime.sys.adlast.TypeRef;
import java.util.ArrayList;
import java.util.Objects;

public class StepStats {

  /* Members */

  private ArrayList<String> sourcesOfInfection;
  private ArrayList<String> placesOfInfection;
  private short numberOfContacts;

  /* Constructors */

  public StepStats(ArrayList<String> sourcesOfInfection, ArrayList<String> placesOfInfection, short numberOfContacts) {
    this.sourcesOfInfection = Objects.requireNonNull(sourcesOfInfection);
    this.placesOfInfection = Objects.requireNonNull(placesOfInfection);
    this.numberOfContacts = numberOfContacts;
  }

  public StepStats() {
    this.sourcesOfInfection = new ArrayList<String>();
    this.placesOfInfection = new ArrayList<String>();
    this.numberOfContacts = (short)0;
  }

  public StepStats(StepStats other) {
    this.sourcesOfInfection = Factories.arrayList(Factories.STRING).create(other.sourcesOfInfection);
    this.placesOfInfection = Factories.arrayList(Factories.STRING).create(other.placesOfInfection);
    this.numberOfContacts = other.numberOfContacts;
  }

  /* Accessors and mutators */

  public ArrayList<String> getSourcesOfInfection() {
    return sourcesOfInfection;
  }

  public void setSourcesOfInfection(ArrayList<String> sourcesOfInfection) {
    this.sourcesOfInfection = Objects.requireNonNull(sourcesOfInfection);
  }

  public ArrayList<String> getPlacesOfInfection() {
    return placesOfInfection;
  }

  public void setPlacesOfInfection(ArrayList<String> placesOfInfection) {
    this.placesOfInfection = Objects.requireNonNull(placesOfInfection);
  }

  public short getNumberOfContacts() {
    return numberOfContacts;
  }

  public void setNumberOfContacts(short numberOfContacts) {
    this.numberOfContacts = numberOfContacts;
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof StepStats)) {
      return false;
    }
    StepStats other = (StepStats) other0;
    return
      sourcesOfInfection.equals(other.sourcesOfInfection) &&
      placesOfInfection.equals(other.placesOfInfection) &&
      numberOfContacts == other.numberOfContacts;
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + sourcesOfInfection.hashCode();
    _result = _result * 37 + placesOfInfection.hashCode();
    _result = _result * 37 + (int) numberOfContacts;
    return _result;
  }

  /* Builder */

  public static class Builder {
    private ArrayList<String> sourcesOfInfection;
    private ArrayList<String> placesOfInfection;
    private Short numberOfContacts;

    public Builder() {
      this.sourcesOfInfection = null;
      this.placesOfInfection = null;
      this.numberOfContacts = null;
    }

    public Builder setSourcesOfInfection(ArrayList<String> sourcesOfInfection) {
      this.sourcesOfInfection = Objects.requireNonNull(sourcesOfInfection);
      return this;
    }

    public Builder setPlacesOfInfection(ArrayList<String> placesOfInfection) {
      this.placesOfInfection = Objects.requireNonNull(placesOfInfection);
      return this;
    }

    public Builder setNumberOfContacts(Short numberOfContacts) {
      this.numberOfContacts = Objects.requireNonNull(numberOfContacts);
      return this;
    }

    public StepStats create() {
      Builders.checkFieldInitialized("StepStats", "sourcesOfInfection", sourcesOfInfection);
      Builders.checkFieldInitialized("StepStats", "placesOfInfection", placesOfInfection);
      Builders.checkFieldInitialized("StepStats", "numberOfContacts", numberOfContacts);
      return new StepStats(sourcesOfInfection, placesOfInfection, numberOfContacts);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<StepStats> FACTORY = new Factory<StepStats>() {
    @Override
    public StepStats create() {
      return new StepStats();
    }

    @Override
    public StepStats create(StepStats other) {
      return new StepStats(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.steps", "StepStats");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<StepStats> jsonBinding() {
      return StepStats.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<StepStats> jsonBinding() {
    final Lazy<JsonBinding<ArrayList<String>>> sourcesOfInfection = new Lazy<>(() -> JsonBindings.arrayList(JsonBindings.STRING));
    final Lazy<JsonBinding<ArrayList<String>>> placesOfInfection = new Lazy<>(() -> JsonBindings.arrayList(JsonBindings.STRING));
    final Lazy<JsonBinding<Short>> numberOfContacts = new Lazy<>(() -> JsonBindings.INT16);
    final Factory<StepStats> _factory = FACTORY;

    return new JsonBinding<StepStats>() {
      @Override
      public Factory<StepStats> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(StepStats _value) {
        JsonObject _result = new JsonObject();
        _result.add("sourcesOfInfection", sourcesOfInfection.get().toJson(_value.sourcesOfInfection));
        _result.add("placesOfInfection", placesOfInfection.get().toJson(_value.placesOfInfection));
        _result.add("numberOfContacts", numberOfContacts.get().toJson(_value.numberOfContacts));
        return _result;
      }

      @Override
      public StepStats fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new StepStats(
          JsonBindings.fieldFromJson(_obj, "sourcesOfInfection", sourcesOfInfection.get()),
          JsonBindings.fieldFromJson(_obj, "placesOfInfection", placesOfInfection.get()),
          JsonBindings.fieldFromJson(_obj, "numberOfContacts", numberOfContacts.get())
        );
      }
    };
  }
}
